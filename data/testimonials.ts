export interface Testimonial {
  id: number
  text: string
  name: string
  position: string
  company: string
  image: string
  rating: number
  location: string
  project: string
  industry?: string
  date?: string
}

// All previous testimonials were placeholders and were removed on 2026-11-20
// (docs/seo/business-goals.md §7). Add only real, client-approved quotes.
export const testimonials: Testimonial[] = [];
