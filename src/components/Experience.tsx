import { experience } from "../data/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.04] bg-[rgba(13,19,32,0.28)] py-[100px] max-md:py-[75px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title="Roles I've Held"
          description="Teaching, supervision, accounting, and blockchain work across the same years."
        />
        <div className="flex flex-col">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.years}`}
              className="flex items-baseline justify-between gap-6 border-b border-white/[0.06] py-5 max-md:flex-col max-md:items-start max-md:gap-1"
            >
              <div>
                <h3 className="m-0 text-[15px] font-semibold">{item.role}</h3>
                <p className="mt-1 text-xs text-muted">{item.company}</p>
              </div>
              <span className="shrink-0 text-[10px] font-bold text-[#67e8f9]">{item.years}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
