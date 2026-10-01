import { Mail } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { profileUrl, site } from "../data/site";
import { LinkButton } from "./Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-stretch overflow-hidden pt-[76px] max-md:min-h-0 max-md:pt-[68px]"
    >
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.014) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute -top-[100px] -right-[180px] size-[650px] rounded-full bg-[rgba(8,145,178,0.18)] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-[260px] size-[450px] rounded-full bg-[rgba(34,211,238,0.12)] blur-[120px]" />

      <div className="container-page relative z-[2] grid min-h-[calc(100vh-76px)] grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] items-center gap-[clamp(50px,7vw,110px)] max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(340px,0.8fr)] max-[1100px]:gap-[30px] max-md:block max-md:min-h-0">
        <div className="py-12 max-md:pt-[55px] max-md:pb-[60px]">
          <span className="block text-[11px] font-bold tracking-[0.28em] text-[#67e8f9] uppercase">
            {site.eyebrow}
          </span>
          <h1 className="mt-[18px] text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-[-0.04em] max-md:text-[clamp(32px,8vw,42px)]">
            Hi, I'm <span className="bg-gradient-to-r from-[#a5f3fc] to-brand bg-clip-text text-transparent">{site.heroTitle}</span>
          </h1>
          <h2 className="mt-5 text-[clamp(20px,2vw,28px)] leading-[1.25] font-semibold tracking-[-0.02em]">
            {site.heroSubtitle}
          </h2>
          <p className="mt-[22px] max-w-[650px] text-[17px] leading-[1.8] text-muted max-md:text-[15px]">
            {site.heroDescription}
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3">
            <LinkButton href={profileUrl} external>
              <GithubIcon className="size-[18px]" />
              View My GitHub
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              <Mail className="size-[18px]" />
              Contact Me
            </LinkButton>
          </div>

          <div className="mt-[42px] grid max-w-[680px] grid-cols-4 max-md:grid-cols-2 max-md:gap-y-7">
            {site.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`border-r border-white/[0.09] px-5 max-md:border-r-0 max-md:px-0 ${index === 0 ? "pl-0" : ""} ${index === site.stats.length - 1 ? "border-r-0" : ""}`}
              >
                <strong className="mb-2 block text-[26px] leading-none">{stat.value}</strong>
                <span className="text-[11px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[520px] items-center justify-center max-md:h-auto max-md:min-h-0 max-md:py-8">
      <div className="absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(34,211,238,0.16)] blur-[100px]" />

      <div className="relative z-[2] w-[min(100%,380px)] overflow-hidden rounded-[2rem] border border-brand/35 shadow-[0_24px_80px_rgba(0,0,0,0.4)] max-md:w-[min(100%,280px)]">
        <img
          src={site.portraitSrc}
          alt={site.portraitAlt}
          className="aspect-[4/5] w-full object-cover object-[center_18%]"
        />
      </div>

      <div className="absolute top-[24%] left-0 z-[5] flex min-w-[130px] flex-col gap-2 rounded-2xl border border-brand/30 bg-[rgba(15,23,42,0.65)] px-[22px] py-[18px] font-mono text-[13px] leading-[1.2] text-[#67e8f9] shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-[18px] max-[1100px]:-left-5 max-md:hidden">
        {site.codeLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>

      <div className="absolute top-[28%] -right-2.5 z-[5] flex items-start gap-3 font-mono text-xs leading-[1.8] tracking-[0.08em] text-[#67e8f9] uppercase max-[1100px]:hidden">
        <span className="mt-2.5 h-px w-[30px] bg-brand" />
        <p className="m-0 whitespace-pre-line">{site.heroQuote}</p>
      </div>
    </div>
  );
}
