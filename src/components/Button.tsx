import type { AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-coral text-white shadow-lg shadow-coral/30 hover:bg-[#d95a41]",
  light: "bg-[#F5EFE3] text-ink hover:bg-white",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export default function Button({
  href = "#",
  variant = "primary",
  className = "",
  children,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 rounded-md px-5 py-3.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${variants[variant]} ${className}`}
      onClick={(e) => {
        if (onClick && href === "#") e.preventDefault();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
