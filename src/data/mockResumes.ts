import type { ResumeTemplate } from "../types/resume";

export const mockResumes = [
  {
    id: "1",
    personalInfo: {
      name: "Alex Morgan",
      title: "Senior Software Engineer",
      email: "alex.morgan@email.com",
      phone: "+1 (555) 019-2834",
      location: "San Francisco, CA",
    },
    summary:
      "Results-driven Senior Full Stack Engineer with 6+ years of experience designing scalable microservices, high-throughput cloud API systems, and modern React web applications.",
  },
  {
    id: "2",
    personalInfo: {
      name: "Sarah Chen",
      title: "Lead UI/UX Product Designer",
      email: "sarah.chen@designhub.io",
      phone: "+1 (555) 392-1049",
      location: "New York, NY",
    },
    summary:
      "Human-centered Product Designer with 5+ years crafting intuitive SaaS platforms, mobile design systems, and enterprise tools with focus on accessibility.",
  },
  {
    id: "3",
    personalInfo: {
      name: "John Doe",
      title: "Junior Frontend Developer",
      email: "johndoe123@gmail.com",
      phone: "555-0192",
      location: "Austin, TX",
    },
    summary:
      "Junior web developer eager to build responsive web apps and learn modern TypeScript frameworks in a fast-paced environment.",
  },
];

export const FEATURED_TEMPLATES: ResumeTemplate[] = [
  {
    id: "tpl-1",
    name: "Executive Single-Column",
    category: "100% ATS Guaranteed",
    atsScore: 99,
    imageBg: "from-blue-600 to-indigo-700",
    accentColor: "#2563eb",
    description:
      "Clean, linear hierarchy designed specifically to bypass complex ATS software filters effortlessly.",
  },
];
