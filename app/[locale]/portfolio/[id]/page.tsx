import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import PortfolioDetailClient from "./PortfolioDetailClient"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: "Project Not Found | Saudi Ease",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Saudi Ease Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Saudi Ease Portfolio`,
      description: project.description,
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function PortfolioDetailPage({ params }: Props) {
  const id = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return <PortfolioDetailClient project={project} relatedProjects={relatedProjects} />
}

