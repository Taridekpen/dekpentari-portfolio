import portrait from "../../Tari.jpg";

export const site = {
  name: "Dekpen Tari",
  title: "Dekpen Tari | Full Stack Web Developer",
  description:
    "Portfolio of Dekpen Tari — full stack web developer, Web3 builder, educator and creator of Stackslads.",
  email: "dekpent@gmail.com",
  resumeUrl: "/Dekpen-Tari-Resume.pdf",
  whatsappUrl: "https://wa.me/2349046121486",
  xUrl: "https://x.com/tari_btc",
  eyebrow: "Full Stack Web Developer",
  heroTitle: "Dekpen Tari",
  heroSubtitle: "I build real-world solutions with code.",
  heroDescription:
    "Full stack web developer, Web3 builder and problem solver. I create products, teach developers, contribute to blockchain ecosystems and turn ideas into working products.",
  codeLines: ["Ideas", "Code", "Build", "Ship", "Repeat_"],
  heroQuote: "A better Africa\nthrough tech",
  portraitSrc: portrait,
  portraitAlt: "Dekpen Tari",
  stats: [
    { value: "10+", label: "Major Projects" },
    { value: "10+", label: "Years Coding" },
    { value: "7+", label: "Years Teaching" },
    { value: "∞", label: "Still Building" },
  ],
  stackslads: {
    name: "Stackslads",
    headline: "Skill-based PvP gaming built on Stacks.",
    description:
      "Stackslads is a multiplayer PvP shooter built on Stacks. Players compete in skill-based matches, own characters, weapons and worlds as digital assets, while creators can build and monetize content inside the game ecosystem.",
    categories: ["Web3", "Multiplayer Game", "Stacks"],
    tags: ["Phaser", "TypeScript", "Node.js", "Colyseus", "MongoDB", "Stacks", "Clarity"],
    imageSrc: "/images/stackslads.jpg",
    imageAlt: "Stackslads gameplay",
    liveUrl: "https://stackslads-client.vercel.app",
    codeUrl: "#",
  },
  timelineIntro: [
    "I've been programming for years, teaching, exploring different technologies and building products across Web2 and Web3.",
    "This is the story behind the code.",
  ],
  nextStop: {
    title: "Next Stop",
    description:
      "Bigger impact, stronger products, more builders and technology that makes a real difference.",
  },
  contact: {
    eyebrow: "Let's Talk",
    title: "Let's Build Together.",
    description:
      "I'm open to freelance work, full-time opportunities, collaborations and ambitious ideas. If you're building something meaningful, let's talk.",
    quote: "Consistent builders change the world.",
  },
  footerNote: "Built with passion.\nFrom Nigeria, for a better tomorrow.",
} as const;

export const githubConfig = {
  username: "Taridekpen",
  repositoriesPerPage: 100,
  displayPerPage: 6,
  excludedRepositories: ["YOUR_GITHUB_USERNAME", "stackslads"],
  showForks: false,
  showArchived: false,
} as const;

export const profileUrl = `https://github.com/${githubConfig.username}`;

export const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#stackslads", label: "Stackslads", id: "stackslads" },
  { href: "/github", label: "GitHub", id: "github" },
  { href: "/#timeline", label: "Timeline", id: "timeline" },
  { href: "/#education", label: "Education", id: "education" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#contracts", label: "Contracts", id: "contracts" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

export const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#stackslads", label: "Stackslads" },
  { href: "/github", label: "GitHub" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
] as const;
