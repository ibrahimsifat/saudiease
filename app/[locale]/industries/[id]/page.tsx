import { locales, localeMetadata, type Locale } from "@/config/i18n";
import { localePath, localeUrl, pageAlternates } from "@/config/site";
import { CASE_STUDIES, CASE_STUDY_UI } from "@/data/case-studies";
import { INDUSTRY_CLIENTS, INDUSTRY_ID, INDUSTRY_PAGES } from "@/data/industry-pages";
import { generateBreadcrumbSchema, generateFAQSchema, ORG_ID } from "@/lib/schema";
import { whatsappLink } from "@/lib/track";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Industry pages exist only for industries with real delivery history (task 3-8).
// The old template pages (retail, healthcare, …) generated invented case studies
// and stay a hard 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, id: INDUSTRY_ID }));
}

type Params = Promise<{ locale: Locale; id: string }>;

function getPage(locale: string, id: string) {
  return id === INDUSTRY_ID ? INDUSTRY_PAGES[locale] ?? null : null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, id } = await params;
  const page = getPage(locale, id);
  if (!page) return { robots: { index: false, follow: true } };
  const path = `/industries/${id}`;
  return {
    title: page.pageTitle,
    description: page.metaDescription,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: page.pageTitle,
      description: page.metaDescription,
      url: localeUrl(locale, path),
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: { params: Params }) {
  const { locale, id } = await params;
  const page = getPage(locale, id);
  if (!page) notFound();

  const path = `/industries/${id}`;
  const isRtl = localeMetadata[locale]?.dir === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const wa = whatsappLink(page.ctaText, localePath(locale, path));

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.pageTitle,
      description: page.metaDescription,
      url: localeUrl(locale, path),
      about: page.industryName,
      publisher: { "@id": ORG_ID },
      mainEntity: {
        "@type": "ItemList",
        name: page.servicesTitle,
        itemListElement: page.services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.name,
            url: localeUrl(locale, `/services/${s.id}`),
            provider: { "@id": ORG_ID },
          },
        })),
      },
    },
    generateBreadcrumbSchema([
      { name: page.breadcrumbHome, url: localeUrl(locale, "") },
      { name: page.breadcrumbIndustries, url: localeUrl(locale, "/industries") },
      { name: page.industryName, url: localeUrl(locale, path) },
    ]),
    generateFAQSchema(page.faqs),
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-primary/10 via-white to-gray-50 py-10 md:py-16">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={localePath(locale, "")} className="hover:text-primary">{page.breadcrumbHome}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={localePath(locale, "/industries")} className="hover:text-primary">{page.breadcrumbIndustries}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium" aria-current="page">{page.industryName}</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">{page.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{page.answer}</p>
          <div className="flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" data-cta="industry-hero"
              className="inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5b]">
              {page.whatsappLabel}
            </a>
            <a href="tel:+966558845503" data-cta="industry-hero"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-saudi-black hover:border-primary hover:text-primary">
              {page.callLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="facts-title">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 id="facts-title" className="text-2xl font-bold text-saudi-black mb-6">{page.facts.title}</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm md:text-base">
              <tbody>
                {page.facts.rows.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-b-0">
                    <th scope="row" className={`w-1/3 bg-gray-50 px-4 py-3 font-semibold text-saudi-black align-top ${align}`}>{row.label}</th>
                    <td className="px-4 py-3 text-gray-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-8" aria-labelledby="services-title">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 id="services-title" className="text-2xl font-bold text-saudi-black mb-6">{page.servicesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {page.services.map((s) => (
              <Link key={s.id} href={localePath(locale, `/services/${s.id}`)}
                className="block rounded-xl border border-gray-200 p-5 hover:border-primary hover:shadow-md transition">
                <h3 className="font-bold text-saudi-black mb-2">{s.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <section key={section.title} className="py-8">
          <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
            <h2 className="text-2xl font-bold text-saudi-black mb-4">{section.title}</h2>
            {section.body.map((p) => (
              <p key={p.slice(0, 40)} className="text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="py-12 bg-gray-50" aria-labelledby="work-title">
        <div className={`container mx-auto px-4 max-w-5xl ${align}`}>
          <h2 id="work-title" className="text-2xl font-bold text-saudi-black mb-2">{page.workTitle}</h2>
          <p className="text-gray-700 mb-6">{page.workIntro}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {INDUSTRY_CLIENTS.map((c) => (
              <figure key={c.name} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="relative aspect-[16/10] bg-gray-100">
                  <Image src={c.screenshot} alt={`${c.name} website`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                </div>
                <figcaption className="p-4">
                  <p className="font-semibold text-saudi-black" dir="ltr">{c.name}</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {CASE_STUDIES.find((cs) => cs.name === c.name) && (
                      <Link href={localePath(locale, `/portfolio/${CASE_STUDIES.find((cs) => cs.name === c.name)!.slug}`)} className="font-semibold text-primary hover:underline">
                        {CASE_STUDY_UI[locale]?.readCase}
                      </Link>
                    )}
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      {page.visitSite}
                    </a>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="faq-title">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 id="faq-title" className="text-2xl font-bold text-saudi-black mb-6">{page.faqTitle}</h2>
          <div className="space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-saudi-black">{faq.question}</summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 className="text-2xl font-bold text-saudi-black mb-3">{page.ctaTitle}</h2>
          <p className="text-gray-700 mb-6">{page.ctaText}</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" data-cta="industry-end"
            className="inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5b]">
            {page.whatsappLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
