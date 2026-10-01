export type EducationItem = {
  qualification: string;
  school: string;
  years: string | null;
};

export const education: EducationItem[] = [
  {
    qualification: "National Diploma, Accounting",
    school: "Bayelsa State College of Art and Science",
    years: "2015–2018",
  },
  {
    qualification: "B.Sc Accounting",
    school: "Federal University Otuoke",
    years: "2019–2024",
  },
  {
    qualification: "Certificate of Completion, Web Development",
    school: "Young Innovators of Nigeria (YIN)",
    years: null,
  },
];
