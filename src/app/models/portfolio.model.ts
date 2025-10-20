export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
  bio: string;
  profileImage?: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  type: 'certification' | 'award';
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
