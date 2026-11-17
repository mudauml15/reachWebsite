import { CheckCircle2, Target, Users } from "lucide-react";
import SectionLabel from "./SectionLabel";

const items = [
  { icon: Target, title: "Apply with confidence", text: "People qualify for opportunities with a stronger sense of self and purpose." },
  { icon: Users, title: "Place and retain", text: "People enter roles, stay beyond probation and become promotion-ready." },
  { icon: CheckCircle2, title: "Grow with support", text: "One-on-one mentorship and follow-ups help turn a job into a career." },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-cream pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel>03 / Our impact</SectionLabel>
          <h2 className="mt-5 text-5xl font-normal leading-[1.1] tracking-tight text-ink lg:text-6xl">
            When people
            <span className="block text-coral">flourish,</span>
            communities do too.
          </h2>
        </div>

        <ul className="max-w-lg lg:pt-6">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 border-b border-slate-200 py-6 first:pt-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-sm text-ink">{title}</h3>
                <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
