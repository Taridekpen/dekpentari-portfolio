import { technologies } from "../data/tech";

export function TechStack() {
  return (
    <section id="about" className="relative z-10 pb-10">
      <div className="container-page">
        <div className="flex min-h-[82px] items-center gap-[30px] rounded-2xl border border-white/[0.08] bg-[rgba(13,19,32,0.9)] px-6 py-[18px] max-md:flex-col max-md:items-start max-md:gap-[15px]">
          <h3 className="m-0 shrink-0 text-sm font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-[9px]">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="inline-flex items-center gap-[7px] rounded-[9px] border border-white/[0.06] bg-white/[0.035] px-[11px] py-2 text-[11px] text-[#cbd5e1] transition duration-200 before:size-1.5 before:rounded-full before:bg-brand before:content-[''] hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
