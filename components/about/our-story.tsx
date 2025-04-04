"use client";

import { CONSTANT } from "@/config/constants";

// Update the component to accept isRTL prop
interface OurStoryProps {
  title: string;
  subtitle: string;
  description: string;
  foundedYear: string;
  foundedLocation: string;
  founderName: string;
  founderTitle: string;
  founderQuote: string;
  imageAlt: string;
  isRTL?: boolean;
}

export default function OurStory({
  title,
  subtitle,
  description,
  foundedYear,
  foundedLocation,
  founderName,
  founderTitle,
  founderQuote,
  imageAlt,
  isRTL = false,
}: OurStoryProps) {
  return (
    <section className={`w-full ${isRTL ? "rtl:text-right" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              {subtitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold">{foundedYear}</h3>
                <p className="text-sm text-muted-foreground">
                  {foundedLocation}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
            <img
              alt={imageAlt}
              className="aspect-[4/3] object-cover w-full h-full rounded-lg"
              height="400"
              src={CONSTANT.images.ourStory}
              width="600"
            />
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <blockquote className="italic text-xl text-muted-foreground">
            "{founderQuote}"
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold">{founderName}</p>
            <p className="text-sm text-muted-foreground">{founderTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
