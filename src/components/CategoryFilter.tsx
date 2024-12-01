import React from 'react';
import { Category } from '../types';
import { categories } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

export default function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}