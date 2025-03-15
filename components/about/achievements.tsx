"use client";

// Update the component to accept isRTL prop
interface Achievement {
  title: string;
  value: string;
  description: string;
}

interface AchievementsProps {
  title: string;
  subtitle: string;
  achievements: Achievement[];
  isRTL?: boolean;
}

export default function Achievements({
  title,
  subtitle,
  achievements,
  isRTL = false,
}: AchievementsProps) {
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
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="text-4xl font-bold text-primary">
                {achievement.value}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
