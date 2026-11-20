import { Locale, localeMetadata } from "@/config/i18n";
import { pageAlternates } from "@/config/site";
import { getProjects } from "@/data/projects/index";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import PortfolioDetailClient from "./PortfolioDetailClient";

type Props = {
  params: Promise<{ id: string; locale: Locale }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const id = Number.parseInt(params.id);
  const projects = getProjects(params.locale as Locale);
  const project = projects.find((p) => p.id === id);
  const t = await getTranslations({
    locale: params.locale,
    namespace: "portfolioPage",
  });

  if (!project) {
    return {
      title: "Project Not Found | Saudi Ease",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | ${t("title")}`,
    description: project.description,
    alternates: pageAlternates(params.locale, `/portfolio/${params.id}`),
    openGraph: {
      title: `${project.title} | ${t("title")}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function PortfolioDetailPage(props: Props) {
  const params = await props.params;
  const id = Number.parseInt(params.id);
  const projects = getProjects(params.locale as Locale);
  const project = projects.find((p) => p.id === id);
  const dir =
    localeMetadata[params.locale as keyof typeof localeMetadata]?.dir || "ltr";

  if (!project) {
    notFound();
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div dir={dir}>
      <PortfolioDetailClient
        project={project}
        relatedProjects={relatedProjects}
        locale={params.locale}
      />
    </div>
  );
}
