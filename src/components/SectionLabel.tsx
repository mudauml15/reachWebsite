import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  color?: string;
}

export default function SectionLabel({ children, color = "text-coral" }: SectionLabelProps) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${color}`}>{children}</p>
  );
}
