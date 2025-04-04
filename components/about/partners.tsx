"use client";

import { CONSTANT } from "@/config/constants";
import { useMemo } from "react";

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
  const partners = useMemo(
    () => [
      { name: "Right Visa", logo: CONSTANT.clients.rightVisa },
      { name: "Kullesh", logo: CONSTANT.clients.kullesh },
      { name: "UPF", logo: CONSTANT.clients.upf },
      { name: "Next Ride", logo: CONSTANT.clients.nextRide },
      { name: "ranchi-university", logo: CONSTANT.clients.ranchiUniversity },
      { name: "Sarah", logo: CONSTANT.clients.sarah },
      { name: "KIC Ads", logo: CONSTANT.clients.kic },
      { name: "24 Deals", logo: CONSTANT.clients.deals },
    ],
    []
  );
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
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                alt={partner.name}
                className="aspect-[2/1] object-contain"
                height="60"
                src={partner.logo}
                width="120"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
