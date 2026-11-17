import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function WhyReach() {
  return (
    <section id="why" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel>01 / Why REACH</SectionLabel>
          <h2 className="mt-5 text-5xl font-normal leading-[1.1] tracking-tight text-ink lg:text-6xl">
            The first job is only
            <span className="block text-coral">the beginning.</span>
          </h2>
        </div>

        <div className="max-w-md space-y-5 pt-2 text-sm leading-7 text-slate-500 lg:pt-10">
          <p>
            South Africa’s unemployment challenge is real. But getting a job is only half the battle. Without workplace readiness, confidence, financial literacy and ongoing support, too many people lose their first opportunity.
          </p>
          <p>
            REACH bridges that gap. We walk alongside our community before, during and after placement — turning first chances into lasting careers.
          </p>
          <a href="#programme" className="inline-flex items-center gap-2 border-b border-coral/40 pb-1.5 text-xs font-semibold text-coral">
            Explore the approach <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
