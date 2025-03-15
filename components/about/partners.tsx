"use client";

// Update the component to accept isRTL prop
interface PartnersProps {
  title: string;
  subtitle: string;
  description: string;
  isRTL?: boolean;
}

export default function Partners({
  title,
  subtitle,
  description,
  isRTL = false,
}: PartnersProps) {
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
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                alt="Partner logo"
                className="aspect-[2/1] object-contain"
                height="60"
                src="/placeholder-logo.svg"
                width="120"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
