interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title: string;
  subtitle: string;
  events: TimelineEvent[];
  isRTL?: boolean;
}

export default function Timeline({
  title,
  subtitle,
  events,
  isRTL = false,
}: TimelineProps) {
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
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  {event.year} - {event.title}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
