import { Category } from '../types';
import { categories } from '../data/categories';
import { ais } from '../data/ais';

interface MetaData {
  title: string;
  description: string;
  image: string;
  pricing: string;
}

async function fetchWebsiteMetadata(url: string): Promise<MetaData> {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    
    if (!data.contents) {
      throw new Error('Failed to fetch website content');
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');
    
    const title = doc.querySelector('title')?.textContent || 
                 doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
                 
    const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 
                       doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';

    // Use a CDN for image optimization
    const originalImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || 
                        doc.querySelector('meta[property="twitter:image"]')?.getAttribute('content');
    
    const image = originalImage ? 
      `https://images.weserv.nl/?url=${encodeURIComponent(originalImage)}&w=400&q=75&output=webp` : 
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&auto=format';

    // Extract pricing information
    const pricingText = doc.body.innerText.toLowerCase();
    let pricing = 'Free';

    const priceMatches = pricingText.match(/(\$\d+(\.\d{2})?\/month|\$\d+)/g);
    if (priceMatches) {
      const lowestPrice = priceMatches
        .map(price => parseFloat(price.replace('$', '')))
        .sort((a, b) => a - b)[0];
      
      if (pricingText.includes('free')) {
        pricing = `Free / Premium $${lowestPrice}`;
      } else {
        pricing = `From $${lowestPrice}`;
      }
    } else if (pricingText.includes('contact') && pricingText.includes('pricing')) {
      pricing = 'Contact for Pricing';
    }

    return { title, description, image, pricing };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: '',
      description: '',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&auto=format',
      pricing: 'Free'
    };
  }
}

function determineCategory(description: string): Category {
  const categoryKeywords: Record<Category, string[]> = {
    'Content Creation': ['content', 'create', 'generation', 'writing'],
    'Writing Assistant': ['writing', 'grammar', 'text', 'edit'],
    'Image Generation': ['image', 'art', 'visual', 'picture'],
    'Video Creation': ['video', 'animation', 'motion'],
    'Audio Processing': ['audio', 'sound', 'voice', 'speech'],
    'Code Assistant': ['code', 'programming', 'development'],
    'Automation': ['automation', 'workflow', 'process'],
    'Gaming & AI Development': ['game', 'gaming', 'development'],
    'Personal Finance & Assistants': ['finance', 'money', 'banking'],
    'All': []
  };

  const descLower = description.toLowerCase();
  let bestMatch: Category = 'Content Creation';
  let maxMatches = 0;

  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    if (category !== 'All') {
      const matches = keywords.filter(keyword => descLower.includes(keyword)).length;
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = category as Category;
      }
    }
  });

  return bestMatch;
}

function determineFeatures(description: string): string[] {
  const commonFeatures = [
    'AI-powered',
    'Real-time processing',
    'Cloud-based',
    'User-friendly interface'
  ];

  const featureKeywords = {
    'Multi-language support': ['language', 'multilingual', 'translation'],
    'Customization': ['custom', 'personalize', 'configure'],
    'Integration': ['integrate', 'api', 'connect'],
    'Analytics': ['analytics', 'insights', 'tracking'],
    'Collaboration': ['team', 'share', 'collaborate'],
    'Export': ['export', 'download', 'save'],
    'Templates': ['template', 'preset', 'ready-made']
  };

  const descLower = description.toLowerCase();
  const detectedFeatures = Object.entries(featureKeywords)
    .filter(([, keywords]) => 
      keywords.some(keyword => descLower.includes(keyword))
    )
    .map(([feature]) => feature);

  return [...new Set([...commonFeatures, ...detectedFeatures])].slice(0, 4);
}

export async function collectAIData(name: string, url: string) {
  try {
    const metadata = await fetchWebsiteMetadata(url);
    const description = metadata.description || `${name} is an AI-powered tool designed to enhance productivity and efficiency.`;
    const category = determineCategory(description);
    
    const newAI = {
      name: name || metadata.title,
      description,
      url,
      category,
      image: metadata.image,
      pricing: metadata.pricing,
      features: determineFeatures(description)
    };

    // Add the new AI to the default list
    ais.push({ ...newAI, id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}` });

    return newAI;
  } catch (error) {
    throw new Error('Failed to collect AI information. Please try again.');
  }
}