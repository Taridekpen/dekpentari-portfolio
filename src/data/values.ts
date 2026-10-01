export type ValueItem = {
  title: string;
  description: string;
  icon: "github" | "users" | "lightbulb" | "globe";
};

export const values: ValueItem[] = [
  {
    title: "Open Source",
    description: "Building and contributing in public.",
    icon: "github",
  },
  {
    title: "Developer Educator",
    description: "Teaching and helping developers grow.",
    icon: "users",
  },
  {
    title: "Problem Solver",
    description: "Turning ideas and problems into products.",
    icon: "lightbulb",
  },
  {
    title: "Africa Focused",
    description: "Building technology for real-world impact.",
    icon: "globe",
  },
];
