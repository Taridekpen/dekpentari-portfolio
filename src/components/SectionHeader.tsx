type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "mb-9",
}: SectionHeaderProps) {
  return (
    <header className={className}>
      <span className="block text-[11px] font-bold tracking-[0.28em] text-[#67e8f9] uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-2.5 text-[clamp(26px,3vw,34px)] leading-[1.2] font-bold tracking-[-0.03em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 max-w-[620px] text-sm leading-[1.7] text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function Eyebrow({ children }: { children: string }) {
  return (
    <span className="block text-[11px] font-bold tracking-[0.28em] text-[#67e8f9] uppercase">
      {children}
    </span>
  );
}
