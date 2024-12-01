import React from 'react';
import { Plus } from 'lucide-react';

interface RequestAIButtonProps {
  onClick: () => void;
}

export default function RequestAIButton({ onClick }: RequestAIButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
    >
      <Plus className="w-5 h-5" />
      Request AI
    </button>
  );
}