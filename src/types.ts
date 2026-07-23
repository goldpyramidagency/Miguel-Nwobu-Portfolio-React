export interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  category: string;
  
  // WordPress ACF Custom Fields requested by user:
  client_name: string;
  business_industry: string;
  project_date: string;
  project_url: string;
  role: string;

  // Additional rich CMS fields
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables?: string[];
  techStack?: string[];
  galleryImages?: { url: string; caption: string }[];
}

export interface LabExperiment {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  interactiveType?: 'seo' | 'ltv' | 'attribution' | 'audit';
  fullContent?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface BlogSection {
  heading: string;
  body: string;
  quote?: string;
  listItems?: string[];
}

export interface InsightArticle {
  id: string;
  slug?: string;
  date: string;
  title: string;
  readTime: string;
  snippet: string;
  content: string;
  
  // Dynamic WordPress post fields:
  author: BlogAuthor;
  category: string;
  tags: string[];
  featuredImage?: string;
  sections?: BlogSection[];
  keyTakeaway?: string;
}

