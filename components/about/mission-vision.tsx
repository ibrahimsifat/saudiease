"use client";

// Update the component to accept isRTL prop
interface MissionVisionProps {
  missionTitle: string;
  missionDescription: string;
  visionTitle: string;
  visionDescription: string;
  isRTL?: boolean;
}

export default function MissionVision({
  missionTitle,
  missionDescription,
  visionTitle,
  visionDescription,
  isRTL = false,
}: MissionVisionProps) {
  return (
    <section className={`w-full ${isRTL ? "rtl:text-right" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold">{missionTitle}</h3>
            <p className="text-muted-foreground">{missionDescription}</p>
          </div>
          <div className="space-y-4 bg-muted p-6 rounded-lg">
            <h3 className="text-2xl font-bold">{visionTitle}</h3>
            <p className="text-muted-foreground">{visionDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
