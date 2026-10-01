import { FileText, Mail, Quote } from "lucide-react";
import { site } from "../data/site";
import { LinkButton } from "./Button";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-br from-[rgba(30,27,75,0.25)] to-background to-60% py-[100px]"
    >
      <div className="absolute top-1/2 right-[10%] size-[400px] -translate-y-1/2 rounded-full bg-brand/10 blur-[100px]" />
      <div className="container-page relative grid grid-cols-[1fr_minmax(320px,500px)] items-center gap-20 max-md:grid-cols-1 max-md:gap-[50px]">
        <div>
          <span className="block text-[11px] font-bold tracking-[0.28em] text-[#67e8f9] uppercase">
            {site.contact.eyebrow}
          </span>
          <h2 className="mt-3 text-[clamp(32px,4vw,44px)] font-bold tracking-[-0.03em]">
            {site.contact.title}
          </h2>
          <p className="mt-[18px] max-w-[600px] text-sm leading-[1.8] text-muted">
            {site.contact.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton href={`mailto:${site.email}`}>
              <Mail className="size-[18px]" />
              Get In Touch
            </LinkButton>
            <LinkButton href={site.resumeUrl} variant="secondary" external>
              <FileText className="size-[18px]" />
              View Resume
            </LinkButton>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-[rgba(15,23,42,0.65)] p-[35px] shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-[18px]">
          <Quote className="size-[30px] text-[#67e8f9]" />
          <blockquote className="my-5 text-[clamp(20px,2.4vw,26px)] leading-[1.45] font-semibold">
            “{site.contact.quote}”
          </blockquote>
          <span className="text-xs text-[#67e8f9]">— {site.name}</span>
        </div>
      </div>
    </section>
  );
}
