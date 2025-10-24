export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  client: string;
  description: string;
  scope: string;
  imageUrl: string;
  category: 'solar' | 'electric' | 'hybrid';
}

export interface Skill {
  name: string;
  category: 'technical' | 'management' | 'domain';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  field: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}
