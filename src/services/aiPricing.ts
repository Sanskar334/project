export function formatPricing(pricing: string | null): string {
  if (!pricing) return 'Contact for Pricing';
  
  // If pricing is already 'Free' or 'Contact for Pricing', return as is
  if (pricing === 'Free' || pricing === 'Contact for Pricing') {
    return pricing;
  }

  // Extract any numeric prices from the string
  const priceMatch = pricing.match(/\$\d+(\.\d{2})?/);
  if (!priceMatch) return pricing;

  // Format the price
  const price = priceMatch[0];
  if (pricing.toLowerCase().includes('free')) {
    return `Free / Premium from ${price}`;
  }
  
  return `Starts at ${price}`;
}