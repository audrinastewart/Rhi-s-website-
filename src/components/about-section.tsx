import { Badge } from "@/components/ui/badge";

const qualities = [
  "Determined",
  "Thoughtful",
  "Brave",
  "Teammate",
  "River kid",
  "Brisbane local",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            About me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Focused at school. Fast on the water. Kind everywhere else.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              I live and go to school in Brisbane, balancing classes, friends,
              training, and the occasional very early alarm. Rowing has become
              my place to build discipline, confidence, and a serious
              appreciation for calm water.
            </p>
            <p>
              I try to be the kind of teammate who turns up, works hard, and
              makes the boat feel lighter. This site captures the things I am
              into right now: rowing, school life, and the city I call home.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5" aria-label="My qualities">
            {qualities.map((q) => (
              <Badge
                key={q}
                variant="outline"
                className="text-sm px-4 py-2 border-primary/30 text-primary bg-primary/8 hover:bg-primary/15 transition-colors cursor-default"
              >
                {q}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
