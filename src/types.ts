export interface AI {
  id: string;
  name: string;
  description: string;
  category: Category;
  url: string;
  image: string;
  pricing: string;
  features: string[];
}

export type Category = 
  | 'All'
  | 'Content Creation'
  | 'Writing Assistant'
  | 'Image Generation'
  | 'Video Creation'
  | 'Audio Processing'
  | 'Code Assistant'
  | 'Automation'
  | 'Gaming & AI Development'
  | 'Personal Finance & Assistants';