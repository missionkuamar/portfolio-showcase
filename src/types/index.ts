export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: 'ai' | 'web' | 'mobile' | 'fullstack';
  complexity: number;
  lighthouseScore: number;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export interface Theme {
  name: 'carbon-neo' | 'aurora-flow' | 'solar-pro';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}