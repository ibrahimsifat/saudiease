import type { Metadata } from "next";
import ConsultationScheduler from "./consultation-scheduler";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Saudi Ease",
  description:
    "Book a personalized consultation with our digital transformation experts to discuss your business needs and explore tailored solutions.",
};

export default function ScheduleConsultationPage() {
  return <ConsultationScheduler />;
}
