import { ArrowRight, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import { pillars } from "../data/programme";

interface ProgrammeProps {
  onApply: () => void;
}

export default function Programme({ onApply }: ProgrammeProps) {
  return (
    <section id="programme" className="bg-deep py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <SectionLabel color="text-gold">02 / The REACH programme</SectionLabel>
            <h2 className="mt-5 text-5xl font-normal leading-[1.1] tracking-tight text-[#F5EFE3] lg:text-6xl">
              Practical tools.
              <span className="block text-gold">Real momentum.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-sky-100/70">
            Mentorship-led and made for real life, our programme prepares you for work — then stays with you as you grow.
          </p>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.n} className="flex min-h-[245px] flex-col rounded-md border border-white/10 bg-panel p-5">
              <span className="text-xs font-semibold text-gold">{p.n}</span>
              <h3 className="mt-9 text-lg text-white">{p.title}</h3>
              <p className="mt-3 text-xs leading-5 text-sky-100/70">{p.text}</p>
              <ArrowRight size={16} className="mt-auto self-end text-coral" />
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="flex items-center gap-2 text-xs text-sky-100/80">
            <ShieldCheck size={16} className="text-gold" /> Built around dignity, not deficit
          </p>
          <Button variant="light" onClick={onApply}>Apply to REACH</Button>
        </div>
      </div>
    </section>
  );
}
