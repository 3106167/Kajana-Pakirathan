export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skillsGained: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  link?: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
