import { education } from "../data/education";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="py-[100px] max-md:py-[75px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Education"
          title="Where I Studied"
          description="Accounting training, then a web development certificate alongside the work."
        />
        <div className="grid grid-cols-3 gap-3.5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {education.map((item) => (
            <article
              key={item.qualification}
              className="rounded-[14px] border border-white/[0.08] bg-surface p-5"
            >
              {item.years ? (
                <span className="text-[10px] font-bold text-[#67e8f9]">{item.years}</span>
              ) : null}
              <h3 className={`m-0 text-[15px] font-semibold ${item.years ? "mt-2" : ""}`}>
                {item.qualification}
              </h3>
              <p className="mt-2 text-xs leading-[1.7] text-muted">{item.school}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
