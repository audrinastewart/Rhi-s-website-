export default function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
            R
          </span>
          <span className="text-sm font-medium text-foreground">Rhi</span>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          Built for me in Brisbane. Row well, study hard, enjoy the river.
        </p>
      </div>
    </footer>
  );
}
