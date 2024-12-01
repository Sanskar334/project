import { extractDomain } from '../utils/urlUtils';

export async function fetchFavicon(url: string): Promise<string> {
  try {
    const domain = extractDomain(url);
    if (!domain) {
      return '';
    }

    // Use a CDN-based favicon service for better reliability and caching
    const services = [
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      `https://icon.horse/icon/${domain}`,
      `https://favicons.githubusercontent.com/${domain}`,
    ];

    // Try each service until we find a working favicon
    for (const serviceUrl of services) {
      try {
        const response = await fetch(serviceUrl);
        if (response.ok) {
          return serviceUrl;
        }
      } catch {
        continue;
      }
    }

    return '';
  } catch (error) {
    console.warn('Logo fetch failed:', error);
    return '';
  }
}