import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const features = [
  {
    number: "01",
    title: "Technique",
    body: "I am always working on clean catches, steady finishes, and the small improvements that add up across a season.",
  },
  {
    number: "02",
    title: "Endurance",
    body: "I like the challenge of long sessions, patient pacing, and staying calm when my legs start talking back.",
  },
  {
    number: "03",
    title: "Crew",
    body: "For me, rowing is trust, timing, and showing up for the people in the boat beside me, even when the forecast looks dramatic.",
  },
];

export default function RowingSection() {
  return (
    <section id="rowing" className="py-28 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            On the water
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Training days that start before the city wakes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <Card
              key={f.number}
              className="group border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <span className="text-5xl font-bold text-primary/25 group-hover:text-primary/50 transition-colors duration-300 leading-none">
                  {f.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-3">
                  {f.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
