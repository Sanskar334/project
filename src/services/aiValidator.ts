export function validateAIData(name: string, url: string) {
  const errors: string[] = [];

  if (!name.trim()) {
    errors.push('AI name is required');
  }

  try {
    new URL(url);
  } catch {
    errors.push('Invalid URL format');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}