import { Category } from '../types';
import { categories } from '../data/categories';

const imageUrls = [
  'https://images.unsplash.com/photo-1676299081847-c0326a0333d5?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1552074289-5a1c1a7ab6f6?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1612832021041-02d6f42c642b?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1518672585191-89608b8b4b8d?auto=format&fit=crop&q=80&w=400'
];

const pricingOptions = [
  'Free',
  'Free Trial / Premium',
  'Starts at $9.99/month',
  'Custom Pricing',
  'Free / Premium Plans Available',
  'Contact for Pricing'
];

const commonFeatures = {
  'Content Creation': ['Content generation', 'AI writing', 'Template library', 'Export options'],
  'Writing Assistant': ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Multi-language support'],
  'Image Generation': ['Text-to-image', 'Style transfer', 'Image editing', 'Batch processing'],
  'Video Creation': ['Video editing', 'AI transitions', 'Template library', 'Export options'],
  'Code Assistant': ['Code completion', 'Bug detection', 'Documentation', 'Multi-language support']
};

export function generateAIData(name: string, url: string) {
  const category = categories[Math.floor(Math.random() * (categories.length - 1)) + 1] as Category;
  
  return {
    name,
    url,
    category,
    description: `${name} is an innovative AI-powered tool that helps users ${
      category.toLowerCase() === category
        ? `with ${category.toLowerCase()}`
        : `with ${category.toLowerCase().replace(/&/g, 'and')}`
    } tasks efficiently and effectively.`,
    image: imageUrls[Math.floor(Math.random() * imageUrls.length)],
    pricing: pricingOptions[Math.floor(Math.random() * pricingOptions.length)],
    features: commonFeatures[category as keyof typeof commonFeatures] || 
      ['AI-powered automation', 'User-friendly interface', 'Cloud integration', 'Real-time processing']
  };
}