import { Link } from "react-router-dom";
import { footerLinks, profileUrl, site } from "../data/site";
import { GithubIcon, WhatsAppIcon, XIcon } from "./BrandIcons";
import { IconLink } from "./Button";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="container-page flex min-h-[105px] items-center justify-between gap-[30px] max-[1100px]:flex-wrap max-[1100px]:py-7 max-md:flex-col max-md:items-start">
        <Logo />
        <nav className="flex gap-[22px] text-[11px] text-muted max-md:flex-wrap">
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <IconLink href={profileUrl} label="GitHub">
            <GithubIcon />
          </IconLink>
          <IconLink href={site.whatsappUrl} label="WhatsApp">
            <WhatsAppIcon />
          </IconLink>
          <IconLink href={site.xUrl} label="X">
            <XIcon />
          </IconLink>
        </div>
        <p className="m-0 text-[10px] leading-[1.6] whitespace-pre-line text-[#64748b]">
          {site.footerNote}
        </p>
      </div>
    </footer>
  );
}
