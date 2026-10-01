import { ArrowUpRight } from "lucide-react";
import { contracts } from "../data/contracts";
import { SectionHeader } from "./SectionHeader";

export function Contracts() {
  return (
    <section id="contracts" className="py-[100px] max-md:py-[75px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected Work"
          title="Contracts"
          description="Client sites and products delivered outside the open-source list."
        />
        <div className="grid grid-cols-3 gap-3.5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {contracts.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[140px] flex-col justify-between rounded-[14px] border border-white/[0.08] bg-surface p-5"
            >
              <h3 className="m-0 text-[15px] font-semibold">{item.name}</h3>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#67e8f9] hover:text-white"
                >
                  Visit site
                  <ArrowUpRight className="size-3.5" />
                </a>
              ) : (
                <span className="mt-6 text-xs text-muted">Client project</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
