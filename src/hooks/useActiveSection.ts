import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "stackslads",
  "timeline",
  "education",
  "experience",
  "contracts",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    function updateActiveNavigation() {
      const scrollPosition = window.scrollY + 150;
      let current = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    }

    updateActiveNavigation();
    window.addEventListener("scroll", updateActiveNavigation, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveNavigation);
    };
  }, []);

  return activeSection;
}
