import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex min-h-[46px] items-center justify-center gap-[9px] rounded-[11px] px-5 text-[13px] font-semibold transition duration-200 hover:-translate-y-0.5";

const variants = {
  primary:
    "border border-transparent bg-gradient-to-r from-[#0891b2] to-brand text-[#042f2e] shadow-[0_10px_30px_rgba(34,211,238,0.2)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.28)]",
  secondary:
    "border border-[rgba(34,211,238,0.35)] bg-[rgba(15,23,42,0.5)] text-white hover:border-brand hover:bg-brand/10",
} as const;

type Variant = keyof typeof variants;

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function LinkButton({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}: LinkButtonProps) {
  const classNameValue = `${base} ${variants[variant]} ${className}`;

  if (!external && href.startsWith("/")) {
    return (
      <Link to={href} className={classNameValue}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classNameValue}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

type ActionButtonProps = {
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function ActionButton({
  variant = "secondary",
  className = "",
  onClick,
  children,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

const iconSizes = {
  md: "size-[42px] [&_svg]:size-[18px]",
  sm: "size-[34px] [&_svg]:size-4",
} as const;

type IconLinkProps = {
  href: string;
  label: string;
  size?: keyof typeof iconSizes;
  children: ReactNode;
};

export function IconLink({ href, label, size = "md", children }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.02] text-[#aeb9cb] transition duration-200 hover:border-brand/50 hover:bg-brand/10 hover:text-white ${iconSizes[size]}`}
    >
      {children}
    </a>
  );
}
