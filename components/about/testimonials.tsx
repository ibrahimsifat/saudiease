"use client";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  imageAlt: string;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  isRTL?: boolean;
}

export default function Testimonials({
  title,
  subtitle,
  testimonials,
  isRTL = false,
}: TestimonialsProps) {
  return (
    <section className={`w-full ${isRTL ? "rtl:text-right" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              {subtitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 rounded-lg border p-6"
            >
              <blockquote className="italic text-xl text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  alt={testimonial.imageAlt}
                  className="aspect-square rounded-full object-cover object-center"
                  height="50"
                  src="/placeholder.svg?height=50&width=50"
                  width="50"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
