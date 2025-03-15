"use client";

// Update the component to accept isRTL prop
interface Initiative {
  title: string;
  description: string;
}

interface CSRInitiativesProps {
  title: string;
  subtitle: string;
  description: string;
  initiatives: Initiative[];
  isRTL?: boolean;
}

export default function CSRInitiatives({
  title,
  subtitle,
  description,
  initiatives,
  isRTL = false,
}: CSRInitiativesProps) {
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
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 rounded-lg border p-6"
            >
              <h3 className="text-xl font-bold">{initiative.title}</h3>
              <p className="text-muted-foreground">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
