import { locales, localeMetadata, type Locale } from "@/config/i18n";
import { localePath, localeUrl, pageAlternates } from "@/config/site";
import { CASE_STUDIES, CASE_STUDY_UI, SITE_LANGUAGE } from "@/data/case-studies";
import { INDUSTRY_ID } from "@/data/industry-pages";
import { generateBreadcrumbSchema, ORG_ID } from "@/lib/schema";
import { whatsappLink } from "@/lib/track";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Case studies (growth plan P1). Only approved clients; facts limited to what is
// verifiable on the client's live site. Unknown IDs are a hard 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => CASE_STUDIES.map((c) => ({ locale, id: c.slug })));
}

type Params = Promise<{ locale: Locale; id: string }>;

function find(id: string) {
  return CASE_STUDIES.find((c) => c.slug === id) ?? null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, id } = await params;
  const cs = find(id);
  const t = cs?.text[locale];
  if (!cs || !t) return { robots: { index: false, follow: true } };
  const path = `/portfolio/${id}`;
  return {
    title: t.pageTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, path),
    openGraph: { title: t.pageTitle, description: t.metaDescription, url: localeUrl(locale, path), type: "article" },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, id } = await params;
  const cs = find(id);
  const t = cs?.text[locale];
  if (!cs || !t) notFound();
  const ui = CASE_STUDY_UI[locale] ?? CASE_STUDY_UI.en;
  const isRtl = localeMetadata[locale]?.dir === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const path = `/portfolio/${id}`;
  const wa = whatsappLink(ui.ctaText, localePath(locale, path));

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: t.h1,
      description: t.metaDescription,
      url: localeUrl(locale, path),
      creator: { "@id": ORG_ID, "@type": "Organization", name: "Saudi Ease" },
      about: { "@type": "Organization", name: cs.name, url: cs.url },
      inLanguage: locale,
    },
    generateBreadcrumbSchema([
      { name: ui.breadcrumbHome, url: localeUrl(locale, "") },
      { name: ui.breadcrumbPortfolio, url: localeUrl(locale, "/portfolio") },
      { name: cs.name, url: localeUrl(locale, path) },
    ]),
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-primary/10 via-white to-gray-50 py-10 md:py-14">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={localePath(locale, "")} className="hover:text-primary">{ui.breadcrumbHome}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={localePath(locale, "/portfolio")} className="hover:text-primary">{ui.breadcrumbPortfolio}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium" aria-current="page" dir="ltr">{cs.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">{t.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.summary}</p>
          <div className="flex flex-wrap gap-3">
            <a href={cs.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-saudi-black hover:border-primary hover:text-primary">
              {ui.visitSite}
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" data-cta="case-hero"
              className="inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5b]">
              {ui.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
            <Image src={cs.screenshot} alt={`${cs.name} website home page`} fill priority sizes="(max-width: 1024px) 100vw, 960px" className="object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm md:text-base">
              <tbody>
                {[
                  [ui.sectorLabel, t.sector],
                  [ui.language, SITE_LANGUAGE[locale] ?? SITE_LANGUAGE.en],
                  [ui.builtWith, "Next.js"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 last:border-b-0">
                    <th scope="row" className={`w-1/3 bg-gray-50 px-4 py-3 font-semibold text-saudi-black ${align}`}>{k}</th>
                    <td className="px-4 py-3 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 className="text-2xl font-bold text-saudi-black mb-4">{t.clientTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{t.clientBody}</p>
          <h3 className="text-xl font-bold text-saudi-black mb-3">{t.servicesTitle}</h3>
          <ul className="list-disc ps-6 space-y-1 text-gray-700">{t.services.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      <section className="py-8">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 className="text-2xl font-bold text-saudi-black mb-4">{t.includesTitle}</h2>
          <ul className="list-disc ps-6 space-y-1 text-gray-700">{t.includes.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      <section className="py-8">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 className="text-2xl font-bold text-saudi-black mb-4">{t.whyTitle}</h2>
          <p className="text-gray-700 leading-relaxed">{t.whyBody}</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 className="text-2xl font-bold text-saudi-black mb-3">{ui.ctaTitle}</h2>
          <p className="text-gray-700 mb-6">{ui.ctaText}</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" data-cta="case-end"
            className="inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5b]">
            {ui.whatsapp}
          </a>
          <ul className="mt-8 space-y-2 text-primary">
            <li><Link href={localePath(locale, `/industries/${INDUSTRY_ID}`)} className="hover:underline">{ui.related}</Link></li>
            {CASE_STUDIES.filter((c) => c.slug !== cs.slug).map((c) => (
              <li key={c.slug}><Link href={localePath(locale, `/portfolio/${c.slug}`)} className="hover:underline" dir="ltr">{c.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
