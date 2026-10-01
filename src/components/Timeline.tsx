import { site } from "../data/site";
import { timeline } from "../data/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="border-t border-white/[0.04] bg-[rgba(13,19,32,0.28)] py-[100px] max-md:py-[75px]">
      <div className="container-page grid grid-cols-[minmax(280px,380px)_minmax(0,1fr)] gap-[clamp(60px,10vw,150px)] max-md:grid-cols-1 max-md:gap-[55px]">
        <div>
          <span className="block text-[11px] font-bold tracking-[0.28em] text-[#67e8f9] uppercase">
            The Journey
          </span>
          <h2 className="mt-2.5 text-[clamp(26px,3vw,34px)] leading-[1.2] font-bold tracking-[-0.03em]">
            More Than Just Repositories.
          </h2>
          {site.timelineIntro.map((paragraph) => (
            <p key={paragraph} className="mt-[18px] max-w-[360px] text-sm leading-[1.8] text-muted">
              {paragraph}
            </p>
          ))}

          <div className="mt-[35px] max-w-[360px] rounded-[14px] border border-brand/25 bg-gradient-to-br from-brand/10 to-brand/[0.04] p-[22px]">
            <h3 className="text-sm font-semibold text-[#67e8f9]">{site.nextStop.title}</h3>
            <p className="mt-[7px] text-xs leading-[1.7] text-muted">{site.nextStop.description}</p>
          </div>
        </div>

        <div className="relative pl-[35px] before:absolute before:top-[7px] before:bottom-0 before:left-1.5 before:w-px before:bg-gradient-to-b before:from-brand before:to-brand/5 before:content-['']">
          {timeline.map((entry) => (
            <article key={entry.year} className="relative pb-[38px] last:pb-0">
              <span className="absolute top-[5px] -left-[35px] size-[13px] rounded-full border-[3px] border-[#171e30] bg-brand shadow-[0_0_0_3px_rgba(34,211,238,0.16),0_0_18px_rgba(34,211,238,0.45)]" />
              <span className="mb-1.5 block text-[10px] font-bold text-[#67e8f9]">{entry.year}</span>
              <h3 className="m-0 text-[15px] font-semibold">{entry.title}</h3>
              <p className="mt-[7px] max-w-[650px] text-xs leading-[1.7] text-muted">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
