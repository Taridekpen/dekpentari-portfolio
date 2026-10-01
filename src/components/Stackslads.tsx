import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useState } from "react";
import { site } from "../data/site";
import { LinkButton } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function Stackslads() {
  const project = site.stackslads;
  const [failed, setFailed] = useState(false);

  return (
    <section id="stackslads" className="py-[100px] max-md:py-[75px]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Flagship Project"
          title="What I'm Building"
          description="My main product and the project I'm currently focused on building."
        />

        <article className="grid grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] overflow-hidden rounded-3xl border border-primary/20 bg-surface max-[1100px]:grid-cols-2 max-md:block">
          <div className="relative flex h-full items-center overflow-hidden bg-[#070d18] max-md:block">
            {failed ? (
              <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-surface to-background">
                <span className="text-4xl font-extrabold tracking-[-0.04em] text-white/80">
                  Stackslads
                </span>
              </div>
            ) : (
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="h-auto w-full object-contain"
                onError={() => setFailed(true)}
              />
            )}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-surface max-md:inset-x-0 max-md:inset-y-auto max-md:bottom-0 max-md:h-10 max-md:w-auto max-md:bg-gradient-to-b" />
            <span className="absolute top-[22px] right-[22px] flex items-center gap-[7px] rounded-full bg-[#34d399] px-[11px] py-[7px] text-[10px] font-extrabold text-[#052e20]">
              <span className="size-1.5 rounded-full bg-[#052e20]" />
              LIVE
            </span>
          </div>

          <div className="relative z-[2] flex flex-col justify-center p-[clamp(35px,5vw,70px)] max-md:px-6 max-md:pt-[30px] max-md:pb-[35px]">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1.5 text-[10px] text-[#67e8f9]"
                >
                  {category}
                </span>
              ))}
            </div>
            <h3 className="mt-6 text-[clamp(32px,4vw,44px)] leading-none font-bold tracking-[-0.03em]">
              {project.name}
            </h3>
            <h4 className="mt-3.5 text-lg font-semibold text-[#d5dbea]">{project.headline}</h4>
            <p className="mt-5 text-sm leading-[1.8] text-muted">{project.description}</p>
            <div className="mt-[26px] flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/5 bg-[rgba(148,163,184,0.08)] px-2.5 py-1.5 text-[10px] text-[#cbd5e1]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={project.liveUrl} external>
                Visit Stackslads
                <ArrowUpRight className="size-[18px]" />
              </LinkButton>
              <LinkButton href={project.codeUrl} variant="secondary" external>
                <GithubIcon className="size-[18px]" />
                View Code
              </LinkButton>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
