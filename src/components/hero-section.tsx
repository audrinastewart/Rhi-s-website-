import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-16 min-h-svh flex items-center"
      aria-label="Hero"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center w-full">
        <div className="space-y-7">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Brisbane student athlete
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            I row with{" "}
            <span className="text-primary">rhythm</span>
            {", "}grit, and sunshine.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            This is my little corner of the web: rowing, school, teammates, and
            the early Brisbane mornings that make it all worth it.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#rowing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-7 font-semibold shadow-lg shadow-primary/20"
              )}
            >
              See My Rowing
            </a>
            <a
              href="#about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-7 font-semibold"
              )}
            >
              About Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/40 ring-1 ring-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://unsplash.com/photos/rC-MCsOt0XQ/download?force=true&w=1200"
              alt="A woman rowing a single scull on calm water"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-5 left-5 bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl">
            <p className="text-xs text-muted-foreground mb-0.5">Next session</p>
            <p className="text-2xl font-bold text-primary leading-none">5:15 AM</p>
            <p className="text-xs text-muted-foreground mt-1">River, crew, reset</p>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
