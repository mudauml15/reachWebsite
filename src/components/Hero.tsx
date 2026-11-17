import { Check, HeartHandshake, Play, Sparkles } from "lucide-react";
import Button from "./Button";

const avatars = [
  { i: "NS", c: "bg-coral text-white" },
  { i: "TM", c: "bg-gold text-ink" },
  { i: "ZA", c: "bg-teal text-white" },
  { i: "+", c: "bg-[#DCE6E1] text-slate-500" },
];

interface HeroProps {
  onApply: () => void;
}

export default function Hero({ onApply }: HeroProps) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-10 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-14">
      <div>
        {/* <p className="mb-8 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-coral">
          <span className="h-2 w-2 rounded-full bg-gold" />
          A new chapter starts here
        </p> */}

        <h1 className="text-5xl font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[80px]">
          Not just getting jobs.
          <span className="block text-coral">Keeping them.</span>
        </h1>

        <p className="mt-8 max-w-md text-base leading-relaxed text-slate-500">
          REACH equips young people and women with the confidence, skills and support to enter the workplace and flourish in it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Button className="px-6 py-4" onClick={onApply}>Start your journey</Button>
          <a href="#programme" className="flex items-center gap-3 text-sm font-semibold text-ink">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-coral/50 text-coral">
              <Play size={14} fill="currentColor" />
            </span>
            See how it works
          </a>
        </div>

        <div className="mt-14 flex items-center gap-4">
          {/* <div className="flex -space-x-2">
            {avatars.map((a) => (
              <span key={a.i} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream text-[10px] font-semibold ${a.c}`}>
                {a.i}
              </span>
            ))}
          </div> */}
          <div>
            <p className="text-xs font-semibold text-ink">For people ready to grow</p>
            <p className="text-[11px] text-slate-400">Youth aged 18–35 and women returning to work.</p>
          </div>
        </div>
      </div>

      {/* Image card */}
      <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
        <div className="pointer-events-none absolute -right-4 top-4 h-[420px] w-[420px] rotate-[20deg] rounded-[50%] border border-gold/70" />
        <div className="pointer-events-none absolute -left-2 top-0 h-[460px] w-[340px] -rotate-12 rounded-[50%] border border-coral/30" />

        <div className="relative w-[300px] rotate-[-2deg] rounded-t-[150px] rounded-b-2xl bg-white p-3 shadow-2xl shadow-slate-300/60 sm:w-[320px]">
          <div className="h-[380px] overflow-hidden rounded-t-[140px] rounded-b-lg bg-gradient-to-b from-[#2a2420] to-[#14171a] sm:h-[400px]">
            {/* Drop your photo at /public/hero.png */}
          
            <img src="/hero.png" alt="Smiling young woman with folded arms" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
          </div>

          <div className="absolute -right-3 bottom-4 left-4 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-white">
              <Check size={16} />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-ink">Confidence looks good on you</p>
              <p className="text-[9px] text-slate-400">Personal mastery · Module 01</p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-12 hidden -rotate-6 items-center gap-2 rounded-md bg-white px-4 py-2.5 shadow-lg sm:flex lg:-left-6">
          {/* <Sparkles size={14} className="text-coral" /> */}
          <span className="text-[11px] font-semibold text-ink">Own your power</span>
        </div>

        <div className="absolute -bottom-2 right-0 flex rotate-3 items-center gap-2 rounded-md bg-white px-4 py-2.5 shadow-lg lg:-right-4">
          <HeartHandshake size={14} className="text-coral" />
          <span className="text-[11px] font-semibold text-ink">Support that stays</span>
        </div>
      </div>
    </section>
  );
}
