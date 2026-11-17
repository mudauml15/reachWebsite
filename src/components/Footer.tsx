export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6 py-12 lg:px-8">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-base font-bold text-white">R</span>
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-ink">REACH</p>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">
              Not just getting jobs.<br />Keeping them. Flourishing in them.
            </p>
          </div>
        </div>
        <div className="flex gap-8 text-[11px] text-slate-400">
          <span>© 2026 REACH (Pty) Ltd</span>
          <span>Made for possibility</span>
        </div>
      </div>
    </footer>
  );
}
