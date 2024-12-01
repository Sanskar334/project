import { AI } from '../types';
import { ais as initialAis } from '../data/ais';

// In-memory storage as fallback when database is not available
let inMemoryAIs = [...initialAis];

// Local storage key
const LOCAL_STORAGE_KEY = 'ai_directory_data';

// Load AIs from local storage
function loadFromLocalStorage(): AI[] {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Merge with initial AIs to ensure new default AIs are included
        const mergedAIs = [...initialAis];
        parsed.forEach(storedAI => {
          if (!mergedAIs.some(ai => ai.id === storedAI.id)) {
            mergedAIs.push(storedAI);
          }
        });
        return mergedAIs;
      }
    }
  } catch (error) {
    console.warn('Error loading from localStorage:', error);
  }
  return initialAis;
}

// Save AIs to local storage
function saveToLocalStorage(ais: AI[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ais));
  } catch (error) {
    console.warn('Error saving to localStorage:', error);
  }
}

// Initialize in-memory storage from local storage
try {
  inMemoryAIs = loadFromLocalStorage();
} catch (error) {
  console.warn('Error initializing storage:', error);
}

export async function getAllAIs(): Promise<AI[]> {
  return inMemoryAIs;
}

export async function addAI(ai: Omit<AI, 'id'>): Promise<AI | null> {
  try {
    const newAI: AI = {
      ...ai,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    
    inMemoryAIs = [...inMemoryAIs, newAI];
    saveToLocalStorage(inMemoryAIs);
    
    return newAI;
  } catch (error) {
    console.error('Error adding AI:', error);
    return null;
  }
}

export async function checkAIExists(name: string): Promise<boolean> {
  return inMemoryAIs.some(ai => 
    ai.name.toLowerCase() === name.toLowerCase()
  );
}