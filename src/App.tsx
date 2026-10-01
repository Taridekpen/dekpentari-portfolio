import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Contracts } from "./components/Contracts";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { GitHubProjects } from "./components/GitHubProjects";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Stackslads } from "./components/Stackslads";
import { TechStack } from "./components/TechStack";
import { Timeline } from "./components/Timeline";
import { Values } from "./components/Values";

function ScrollToLocation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      document.getElementById(id)?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <Stackslads />
      <Timeline />
      <Education />
      <Experience />
      <Contracts />
      <Values />
      <Contact />
    </>
  );
}

function GitHubPage() {
  return (
    <div className="pt-[76px] max-md:pt-[68px]">
      <GitHubProjects />
    </div>
  );
}

function Layout() {
  return (
    <>
      <ScrollToLocation />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/github" element={<GitHubPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
