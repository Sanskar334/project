import React, { useEffect, useState } from 'react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { AI } from '../types';
import { fetchFavicon } from '../services/logoFetcher';

interface AICardProps {
  ai: AI;
}

export default function AICard({ ai }: AICardProps) {
  const [logo, setLogo] = useState<string>('');
  const [logoError, setLogoError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const faviconUrl = await fetchFavicon(ai.url);
        if (faviconUrl) {
          setLogo(faviconUrl);
          setLogoError(false);
        } else {
          setLogoError(true);
        }
      } catch {
        setLogoError(true);
      }
    };

    // Reset states when AI changes
    setImageLoaded(false);
    setImageError(false);
    loadLogo();

    // Preload the main image
    const img = new Image();
    img.src = ai.image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [ai.url, ai.image]);

  const fallbackImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&auto=format';

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col h-full">
      <div className="h-48 sm:h-40 lg:h-48 overflow-hidden relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-400" />
          </div>
        )}
        <img
          src={imageError ? fallbackImage : ai.image}
          alt={ai.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={(e) => {
            setImageError(true);
            e.currentTarget.src = fallbackImage;
          }}
          loading="lazy"
          decoding="async"
        />
        {logo && !logoError && (
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
            <img
              src={logo}
              alt={`${ai.name} logo`}
              className="w-8 h-8 object-contain"
              onError={() => setLogoError(true)}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{ai.name}</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-600 whitespace-nowrap">
            {ai.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{ai.description}</p>
        <div className="mb-4 flex-grow">
          <div className="flex flex-wrap gap-2">
            {ai.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-500">{ai.pricing}</span>
          <a
            href={ai.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm"
          >
            Visit <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}