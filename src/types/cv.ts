export interface LinkInfo {
  title?: string | null;
  url?: string | null;
}

export interface Profile {
  name: string;
  position: string;
  image?: string;
}

export interface Contact {
  mail?: string;
  city?: string;
  linkedin?: LinkInfo;
  github?: LinkInfo;
  researchgate?: LinkInfo;
}

export interface Skill {
  categoryName: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Experience {
  company: string;
  location?: string;
  position: string;
  year: string;
  description: string;
}

export interface Education {
  name: string;
  location: string;
  diplomaName: string;
  year: string;
  description?: string;
}

export interface Project {
  name: string;
  year: string;
  description: string;
}

export interface Certification {
  name: string;
}

export interface About {
  description?: string;
}

export interface CVData {
  profile: Profile;
  contact: Contact;
  skills: Skill[];
  certifications: Certification[];
  languages: Language[];
  about: About;
  experiences: Experience[];
  education: Education[];
  projects: Project[];
}

export type FieldType = "text" | "textarea" | "url";

export const fieldMeta: Record<string, FieldType> = {
  // About
  "about.description": "textarea",
  // Experience
  "experiences.description": "textarea",
  // Education
  "education.description": "textarea",
  // Projects
  "projects.description": "textarea",
  // Contact - URLs
  "contact.linkedin.url": "url",
  "contact.github.url": "url",
  "contact.researchgate.url": "url",
};
