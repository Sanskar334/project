import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <h2 className="text-xl font-semibold text-gray-900">Success</h2>
            <button
              onClick={onClose}
              className="ml-auto text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mb-6">{message}</p>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}