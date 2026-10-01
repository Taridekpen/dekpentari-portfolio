import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, profileUrl } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { GithubIcon } from "./BrandIcons";
import { IconLink, LinkButton } from "./Button";
import { Logo } from "./Logo";

const linkClass =
  "relative transition-colors duration-200 hover:text-white after:absolute after:bottom-[-15px] after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-[#0891b2] after:to-brand after:transition-[width] after:duration-200 after:content-[''] hover:after:w-full";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const scrolledSection = useActiveSection();
  const activeSection = pathname === "/github" ? "github" : scrolledSection;

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-[1000] border-b border-white/5 bg-[rgba(6,10,18,0.78)] backdrop-blur-[18px]">
      <div className="container-page flex h-[76px] items-center justify-between max-md:h-[68px]">
        <Logo />

        <nav className="flex items-center gap-5 text-[13px] text-[#cbd5e1] max-[1100px]:hidden">
          {navLinks.map((link) => {
            const active = activeSection === link.id;

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`${linkClass} ${active ? "text-white after:w-full" : "after:w-0"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 max-[1100px]:hidden">
          <IconLink href={profileUrl} label="GitHub">
            <GithubIcon />
          </IconLink>
          <LinkButton href="/#contact">Let's Work Together</LinkButton>
        </div>

        <button
          type="button"
          className="hidden size-[42px] items-center justify-center rounded-[11px] border border-white/[0.08] bg-transparent text-white max-[1100px]:inline-flex"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </div>
    </header>

      <div
        inert={open ? undefined : true}
        className={`fixed inset-0 z-[1100] hidden max-[1100px]:block ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
        />
        <aside
          className={`absolute inset-y-0 right-0 flex h-dvh w-[min(320px,85vw)] flex-col border-l border-white/10 bg-[#060a12] shadow-[-20px_0_60px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-[68px] items-center justify-between px-6">
            <span className="text-sm font-semibold tracking-[0.08em] text-[#67e8f9] uppercase">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex size-[42px] items-center justify-center rounded-[11px] border border-white/[0.08] text-white"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 pb-8">
            {navLinks.map((link) => {
              const active = activeSection === link.id;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-[15px] transition-colors duration-200 ${active ? "bg-brand/10 text-white" : "text-[#cbd5e1] hover:bg-white/5 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
}
