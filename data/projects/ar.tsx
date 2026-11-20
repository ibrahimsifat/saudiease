import { CONSTANT } from "@/config/constants";
import type { JSX } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  mobileImage: string;
  stats: {
    icon: JSX.Element;
    label: string;
    value: string;
  }[];
  link: string;
  client?: string;
  duration?: string;
  completionDate?: string;
  testimonial?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

// Placeholder projects removed 2026-11-20 (not real; docs/seo/business-goals.md §7).
// Add real, client-approved projects here.
export const projects: Project[] = [];
