import { Globe2, Lightbulb, Users } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { ValueItem } from "../data/values";
import { values } from "../data/values";
import { SectionHeader } from "./SectionHeader";

const icons = {
  github: GithubIcon,
  users: Users,
  lightbulb: Lightbulb,
  globe: Globe2,
} as const;

export function Values() {
  return (
    <section className="py-[100px] max-md:py-[75px]">
      <div className="container-page">
        <SectionHeader eyebrow="Beyond Code" title="What I Bring" />
        <div className="grid grid-cols-4 gap-3.5 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }: { value: ValueItem }) {
  const Icon = icons[value.icon];

  return (
    <article className="flex items-center gap-3.5 rounded-[14px] border border-white/[0.08] bg-surface p-5 transition duration-200 hover:-translate-y-[3px] hover:border-brand/35">
      <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-brand/10 text-[#67e8f9]">
        <Icon className="size-[18px]" />
      </div>
      <div>
        <h3 className="m-0 text-[13px] font-semibold">{value.title}</h3>
        <p className="mt-1 text-[10px] text-muted">{value.description}</p>
      </div>
    </article>
  );
}
