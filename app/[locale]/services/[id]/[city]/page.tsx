import { locales, localeMetadata, type Locale } from "@/config/i18n";
import { localePath, localeUrl, pageAlternates } from "@/config/site";
import { CITIES, CITY_PAGES, CITY_SERVICE, type CitySlug } from "@/data/city-pages";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  ORG_ID,
} from "@/lib/schema";
import { whatsappLink } from "@/lib/track";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Service × city pages exist only where on-site delivery is real (task 3-7).
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    CITIES.map((city) => ({ locale, id: CITY_SERVICE, city }))
  );
}

type Params = Promise<{ locale: Locale; id: string; city: string }>;

function getPage(locale: string, id: string, city: string) {
  if (id !== CITY_SERVICE) return null;
  return CITY_PAGES[locale]?.[city as CitySlug] ?? null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, id, city } = await params;
  const page = getPage(locale, id, city);
  if (!page) return {};
  const path = `/services/${id}/${city}`;
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

export default async function CityServicePage({ params }: { params: Params }) {
  const { locale, id, city } = await params;
  const page = getPage(locale, id, city);
  if (!page) notFound();

  const path = `/services/${id}/${city}`;
  const isRtl = localeMetadata[locale]?.dir === "rtl";
  const otherCity = CITIES.find((c) => c !== city)!;
  const wa = whatsappLink(page.ctaText, localePath(locale, path));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.serviceName} – ${page.cityName}`,
    serviceType: page.serviceName,
    description: page.metaDescription,
    url: localeUrl(locale, path),
    provider: { "@id": ORG_ID, "@type": "Organization", name: "Saudi Ease" },
    areaServed: { "@type": "City", name: city === "dammam" ? "Dammam" : "Al Khobar" },
  };
  const breadcrumb = generateBreadcrumbSchema([
    { name: page.breadcrumbHome, url: localeUrl(locale, "") },
    { name: page.breadcrumbServices, url: localeUrl(locale, "/services") },
    { name: page.serviceName, url: localeUrl(locale, `/services/${id}`) },
    { name: page.cityName, url: localeUrl(locale, path) },
  ]);
  const faqSchema = generateFAQSchema(page.faqs);

  const align = isRtl ? "text-right" : "text-left";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumb, faqSchema]) }}
      />

      <section className="bg-gradient-to-br from-primary/10 via-white to-gray-50 py-10 md:py-16">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={localePath(locale, "")} className="hover:text-primary">{page.breadcrumbHome}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={localePath(locale, "/services")} className="hover:text-primary">{page.breadcrumbServices}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={localePath(locale, `/services/${id}`)} className="hover:text-primary">{page.serviceName}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium" aria-current="page">{page.cityName}</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">{page.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{page.answer}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="city-hero"
              className="inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5b]"
            >
              {page.whatsappLabel}
            </a>
            <a
              href="tel:+966558845503"
              data-cta="city-hero"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-saudi-black hover:border-primary hover:text-primary"
            >
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
                    <th scope="row" className={`w-1/3 bg-gray-50 px-4 py-3 font-semibold text-saudi-black align-top ${align}`}>
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-gray-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <section className="py-12 bg-gray-50" aria-labelledby="faq-title">
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

      <section className="py-12">
        <div className={`container mx-auto px-4 max-w-4xl ${align}`}>
          <h2 className="text-2xl font-bold text-saudi-black mb-3">{page.ctaTitle}</h2>
          <p className="text-gray-700 mb-6">{page.ctaText}</p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="city-end"
            className="inline-flex items-center rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5b]"
          >
            {page.whatsappLabel}
          </a>
          <ul className="mt-8 space-y-2 text-primary">
            <li><Link href={localePath(locale, `/services/${id}`)} className="hover:underline">{page.serviceLinkLabel}</Link></li>
            <li><Link href={localePath(locale, `/services/${id}/${otherCity}`)} className="hover:underline">{page.otherCityLabel}</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
