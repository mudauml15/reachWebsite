import Button from "./Button";

interface CallToActionProps {
  onApply: () => void;
}

export default function CallToAction({ onApply }: CallToActionProps) {
  return (
    <section id="contact" className="bg-cream px-6 pb-16 pt-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-lg bg-mint px-8 py-16 lg:grid-cols-2 lg:px-20">
        <div>
          <p className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-coral">
            <span className="h-2 w-2 rounded-full bg-gold" /> Your next chapter
          </p>
          <h2 className="text-5xl font-normal leading-[1.1] tracking-tight text-ink lg:text-6xl">
            Ready to reach
            <span className="block text-coral">your potential?</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm leading-7 text-slate-500">
            Whether you’re looking for your first opportunity, a fresh start, or a partner in creating change — there’s a place for you here.
          </p>
          <Button className="mt-6" onClick={onApply}>Apply to the programme</Button>
        </div>
      </div>
    </section>
  );
}
