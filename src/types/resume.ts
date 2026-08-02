export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
  portfolio?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: {
    id: string;
    text: string;
    score: number; // 0-100
    suggestion?: string;
    impactType?: "metric" | "action-verb" | "brevity" | "vague";
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
}

export interface ResumeData {
  id: string;
  title: string;
  targetRole: string;
  fileName: string;
  fileSize: string;
  updatedAt: string;
  contact: ContactInfo;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: {
    found: string[];
    missingForTarget: string[];
  };
  atsChecks: {
    id: string;
    category: "Format" | "Structure" | "Content" | "Contact";
    title: string;
    status: "pass" | "warning" | "fail";
    detail: string;
  }[];
  scores: {
    overall: number;
    atsReadability: number;
    impactMetrics: number;
    brevityStyle: number;
    skillRelevance: number;
  };
}

export interface JobDescriptionMatch {
  title: string;
  company: string;
  matchScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  recommendations: string[];
}

export interface ResumeTemplate {
  id: string;
  name: string;
  category: string;
  atsScore: number;
  imageBg: string;
  accentColor: string;
  description: string;
}
