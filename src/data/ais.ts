import { AI } from '../types';

export const ais: AI[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and content generation',
    category: 'Content Creation',
    url: 'https://chat.openai.com',
    image: 'https://imagedelivery.net/K11gkZF3xaVyYzFESMdWIQ/a3d6b3e8-a0df-4edd-7413-3f624b1c6000/full',
    pricing: 'Free / Premium',
    features: ['Chat', 'Text completion', 'Content generation', 'Creative writing']
  },
  {
    id: '2',
    name: 'Google Bard',
    description: 'Conversational AI by Google for creative tasks and content generation',
    category: 'Content Creation',
    url: 'https://bard.google.com/',
    image: 'https://www.gstatic.com/lamda/images/hero_v2_1024.jpg',
    pricing: 'Free',
    features: ['Conversational AI', 'Creative writing', 'Research assistance']
  },
  {
    id: '3',
    name: 'Jasper AI',
    description: 'AI-driven tool for copywriting and content generation, including blogs and ads.',
    category: 'Content Creation',
    url: 'https://www.jasper.ai/',
    image: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/64913cc13a430e6b558c1501_jasper-og.jpg',
    pricing: 'Starts at $49/month',
    features: ['Content creation', 'Marketing copy', 'Blog writing']
  },
  {
    id: '4',
    name: 'Copy.ai',
    description: 'AI-powered content creation tool for marketing and business content',
    category: 'Content Creation',
    url: 'https://www.copy.ai/',
    image: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62c4c1fa1c4d64e36bbc6878_meta-home.jpg',
    pricing: 'Free Trial / Paid Plans Start at $36/month',
    features: ['Marketing copy', 'Social media content', 'Ad creation']
  },
  {
    id: '5',
    name: 'Writesonic',
    description: 'AI-driven writing assistant for creating blogs, ads, and social media posts',
    category: 'Content Creation',
    url: 'https://writesonic.com/',
    image: 'https://writesonic.com/static/landing/img/home-hero.png',
    pricing: 'Free Trial / Paid Plans Start at $19/month',
    features: ['Marketing copy', 'Blog writing', 'Social media posts']
  },
  {
    id: '6',
    name: 'Quillbot',
    description: 'AI-powered paraphrasing and grammar-checking tool for writers',
    category: 'Writing Assistant',
    url: 'https://quillbot.com/',
    image: 'https://assets.quillbot.com/images/og/quillbot-og.png',
    pricing: 'Free / Premium at $9.95/month',
    features: ['Paraphrasing', 'Grammar correction', 'Citation generator']
  },
  {
    id: '7',
    name: 'Rytr',
    description: 'AI writing assistant for generating high-quality content quickly',
    category: 'Writing Assistant',
    url: 'https://rytr.me/',
    image: 'https://rytr.me/static/media/home-hero.b4b56b3c.png',
    pricing: 'Free / Paid Plans Start at $9/month',
    features: ['AI writing assistant', 'Content generation', 'Multi-language support']
  },
  {
    id: '8',
    name: 'DeepL Write',
    description: 'AI tool for improving clarity, tone, and style in writing',
    category: 'Writing Assistant',
    url: 'https://www.deepl.com/write',
    image: 'https://static.deepl.com/img/write/write-og.jpg',
    pricing: 'Free',
    features: ['Writing enhancement', 'Clarity improvement', 'Style optimization']
  },
  {
    id: '9',
    name: 'DALL·E',
    description: 'AI system that creates realistic images from text descriptions',
    category: 'Image Generation',
    url: 'https://labs.openai.com',
    image: 'https://cdn.openai.com/dall-e-2/og-image-website.jpg',
    pricing: 'Free / Pay per use',
    features: ['Image generation', 'Art creation', 'Design assistance']
  },
  {
    id: '10',
    name: 'Midjourney',
    description: 'Create stunning artwork using AI-powered image generation',
    category: 'Image Generation',
    url: 'https://www.midjourney.com',
    image: 'https://cdn.midjourney.com/b88a4003-5919-4c9f-9ca5-83f3ca7c2527/0_0.webp',
    pricing: 'Starts at $10/month',
    features: ['Art generation', 'Style transfer', 'Creative tools']
  },
  {
    id: '11',
    name: 'Stable Diffusion',
    description: 'Open-source AI for generating detailed and high-quality images.',
    category: 'Image Generation',
    url: 'https://stability.ai/',
    image: 'https://stability.ai/assets/images/stable-og.jpg',
    pricing: 'Free / Open-Source',
    features: ['Open-source AI', 'Text-to-image generation', 'High-quality visuals']
  },
  {
    id: '12',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code',
    category: 'Code Assistant',
    url: 'https://github.com/features/copilot',
    image: 'https://github.blog/wp-content/uploads/2023/05/GitHub-Copilot-Enterprise.png',
    pricing: 'Free for students / $10/month',
    features: ['Code completion', 'Documentation', 'Bug detection']
  },
  {
    id: '13',
    name: 'TabNine',
    description: 'AI-powered code completion tool for multiple programming languages.',
    category: 'Code Assistant',
    url: 'https://www.tabnine.com/',
    image: 'https://www.tabnine.com/blog/wp-content/uploads/2021/08/tabnine_og.png',
    pricing: 'Free / Paid Plans Start at $12/month',
    features: ['Code completion', 'Multi-language support', 'IDE compatibility']
  },
  {
    id: '14',
    name: 'CodeT5',
    description: 'Open-source model for code generation and understanding by Hugging Face.',
    category: 'Code Assistant',
    url: 'https://huggingface.co/models?search=CodeT5',
    image: 'https://huggingface.co/front/assets/huggingface_logo.svg',
    pricing: 'Free',
    features: ['Code generation', 'Code understanding', 'Open-source']
  },
  {
    id: '15',
    name: 'Kite',
    description: 'AI coding assistant for Python developers with intelligent code completions.',
    category: 'Code Assistant',
    url: 'https://www.kite.com/',
    image: 'https://kite.com/wp-content/uploads/2021/06/kite-og.png',
    pricing: 'Free',
    features: ['Python support', 'Code completions', 'Documentation assistance']
  },
  {
    id: '16',
    name: 'Replit Ghostwriter',
    description: 'AI coding and debugging assistant integrated into Replit IDE.',
    category: 'Code Assistant',
    url: 'https://replit.com/ghostwriter',
    image: 'https://blog.replit.com/images/ghostwriter_launch/og.png',
    pricing: 'Free / Premium at $10/month',
    features: ['Code generation', 'Debugging', 'Replit IDE integration']
  },
  {
    id: '17',
    name: 'Codex',
    description: 'AI-powered code generation from natural language instructions.',
    category: 'Code Assistant',
    url: 'https://openai.com/research/codex',
    image: 'https://cdn.openai.com/research-covers/codex/2x-no-mark.jpg',
    pricing: 'Contact for Pricing',
    features: ['Natural language to code', 'Multi-language support', 'Code generation']
  },
  {
    id: '18',
    name: 'Whisper',
    description: 'Advanced speech recognition and transcription system',
    category: 'Audio Processing',
    url: 'https://openai.com/research/whisper',
    image: 'https://cdn.openai.com/research-covers/whisper/2x-no-mark.jpg',
    pricing: 'Free / API Usage Based',
    features: ['Transcription', 'Translation', 'Voice recognition']
  },
  {
    id: '19',
    name: 'Runway',
    description: 'AI-powered tools for video and image editing',
    category: 'Video Creation',
    url: 'https://runwayml.com/',
    image: 'https://cdn.sanity.io/images/732ftemt/production/0368e1ffd5b7c9c6b5f1c3c5f7d7e7c9b5f1c3c5.png',
    pricing: 'Free / Paid Plans Start at $12/month',
    features: ['Video editing', 'Image inpainting', 'Real-time effects']
  },
  {
    id: '20',
    name: 'Pictory',
    description: 'Convert long-form content into short, shareable videos with AI',
    category: 'Video Creation',
    url: 'https://pictory.ai/',
    image: 'https://pictory.ai/wp-content/uploads/2023/01/pictory-og.png',
    pricing: 'Starts at $19/month',
    features: ['Video summarization', 'Text-to-video', 'Voiceover integration']
  },
  {
    id: '21',
    name: 'Synthesia',
    description: 'Create videos with AI avatars and voiceovers in multiple languages',
    category: 'Video Creation',
    url: 'https://www.synthesia.io/',
    image: 'https://www.synthesia.io/meta-image.png',
    pricing: 'Starts at $30/month',
    features: ['AI avatars', 'Multilingual support', 'Custom templates']
  },
  {
    id: '22',
    name: 'Lumen5',
    description: 'AI-powered tool to transform text into engaging videos.',
    category: 'Video Creation',
    url: 'https://www.lumen5.com/',
    image: 'https://storage.googleapis.com/lumen5-site-images/og-image.png',
    pricing: 'Free Trial / Paid Plans Start at $29/month',
    features: ['Text-to-video', 'Storyboarding', 'Custom branding']
  },
  {
    id: '23',
    name: 'DeepBrain AI',
    description: 'AI platform for creating videos with lifelike human avatars.',
    category: 'Video Creation',
    url: 'https://www.deepbrain.io/',
    image: 'https://www.deepbrain.io/images/og.png',
    pricing: 'Contact for Pricing',
    features: ['AI avatars', 'Realistic animations', 'Multilingual support']
  },
  {
    id: '24',
    name: 'Animaker',
    description: 'Simplified video creation tool with AI features for animations and edits.',
    category: 'Video Creation',
    url: 'https://www.animaker.com/',
    image: 'https://www.animaker.com/assets/images/og/animaker.png',
    pricing: 'Free / Paid Plans Start at $10/month',
    features: ['Animation', 'Text-to-video', 'Video editing']
  },
  {
    id: '25',
    name: 'Zapier',
    description: 'Automate workflows across different apps to save time and increase productivity.',
    category: 'Automation',
    url: 'https://zapier.com/',
    image: 'https://cdn.zapier.com/zapier/images/og/og-image.png',
    pricing: 'Free / Paid Plans Start at $19.99/month',
    features: ['App integration', 'Workflow automation', 'Task automation']
  },
  {
    id: '26',
    name: 'IFTTT',
    description: 'Create applets to automate tasks across a wide range of apps and services.',
    category: 'Automation',
    url: 'https://ifttt.com/',
    image: 'https://web-assets.ifttt.com/packs/media/shared/ifttt-banner-287889aa7d44e76a8d08.png',
    pricing: 'Free / Paid Plans Start at $3.99/month',
    features: ['Applets creation', 'Task automation', 'Cross-platform integration']
  },
  {
    id: '27',
    name: 'Microsoft Power Automate',
    description: 'Workflow automation and integration tool to help businesses automate processes.',
    category: 'Automation',
    url: 'https://flow.microsoft.com/',
    image: 'https://powerautomate.microsoft.com/images/application-logos/og/flow-og-image.png',
    pricing: 'Free / Paid Plans Start at $15/user/month',
    features: ['Workflow automation', 'Business process automation', 'Data integration']
  },
  {
    id: '28',
    name: 'Automation Anywhere',
    description: 'Enterprise-grade robotic process automation (RPA) platform for automating business tasks.',
    category: 'Automation',
    url: 'https://www.automationanywhere.com/',
    image: 'https://www.automationanywhere.com/sites/default/files/images/AAI-social-share.jpg',
    pricing: 'Contact for Pricing',
    features: ['Robotic process automation', 'Business automation', 'AI-powered automation']
  },
  {
    id: '58',
    name: 'Unity ML-Agents',
    description: 'Toolkit for integrating machine learning in gaming using Unity.',
    category: 'Gaming & AI Development',
    url: 'https://unity.com/products/machine-learning-agents',
    image: 'https://unity.com/sites/default/files/styles/16_9_l_scale_width/public/2020-05/unity-ml-agents-banner.jpg',
    pricing: 'Free',
    features: ['Machine learning in games', 'Reinforcement learning', 'Environment simulation']
  },
  {
    id: '59',
    name: 'DeepMind AlphaGo',
    description: 'AI developed to master strategic board games like Go.',
    category: 'Gaming & AI Development',
    url: 'https://deepmind.com/research/highlighted-research/alphago',
    image: 'https://storage.googleapis.com/deepmind-media/alphago/alphago-hero.jpg',
    pricing: 'Free',
    features: ['Strategic game mastery', 'Deep reinforcement learning', 'AI vs human gameplay']
  },
  {
    id: '60',
    name: 'OpenAI Gym',
    description: 'Toolkit for developing and comparing reinforcement learning algorithms.',
    category: 'Gaming & AI Development',
    url: 'https://www.gymlibrary.dev/',
    image: 'https://gymnasium.farama.org/_static/img/gymnasium_black.svg',
    pricing: 'Free',
    features: ['Reinforcement learning', 'Algorithm benchmarking', 'Game environments']
  },
  {
    id: '61',
    name: 'Godot Engine AI Plugins',
    description: 'Plugins and tools to enhance game mechanics with AI in the Godot Engine.',
    category: 'Gaming & AI Development',
    url: 'https://godotengine.org/',
    image: 'https://godotengine.org/assets/og_image.png',
    pricing: 'Free',
    features: ['AI-enhanced mechanics', 'Game engine plugins', 'Flexible development tools']
  },
  {
    id: '63',
    name: 'Cleo AI',
    description: 'AI-powered personal finance assistant for budgeting and financial insights.',
    category: 'Personal Finance & Assistants',
    url: 'https://web.meetcleo.com/',
    image: 'https://web.meetcleo.com/assets/images/og-image.jpg',
    pricing: 'Free / Premium at $5.99/month',
    features: ['Budgeting', 'Financial tracking', 'Spending insights']
  }
];