import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  { label: "Why REACH", href: "#why" },
  { label: "The programme", href: "#programme" },
  { label: "Our impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onApply: () => void;
}

export default function Navbar({ onApply }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral text-lg font-bold text-white">R</span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-[0.2em] text-ink">REACH</span>
            <span className="block text-[11px] text-slate-500">Youth &amp; women development</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <Button className="!py-3" onClick={onApply}>Join REACH</Button>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-slate-200 bg-cream px-6 pb-6 pt-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600">
              {l.label}
            </a>
          ))}
          <Button
            className="w-fit"
            onClick={() => {
              setOpen(false);
              onApply();
            }}
          >
            Join REACH
          </Button>
        </nav>
      )}
    </header>
  );
}
