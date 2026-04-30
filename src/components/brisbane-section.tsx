export default function BrisbaneSection() {
  return (
    <section
      id="brisbane"
      className="py-28 relative overflow-hidden"
      aria-label="Brisbane life"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.718 0.148 212 / 6%) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute right-0 inset-y-0 w-[45%] flex flex-col justify-center gap-10 pr-12 pointer-events-none"
        aria-hidden="true"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, oklch(0.718 0.148 212 / 25%), transparent)",
              marginRight: `${i * 48}px`,
              animation: `drift ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Brisbane life
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl mb-6">
          School bag by day,{" "}
          <span className="text-primary">oars by sunrise.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          From classrooms to riverbanks, my routine is shaped by the best parts
          of Brisbane: warm mornings, big skies, and plenty of water to chase.
        </p>
      </div>
    </section>
  );
}
