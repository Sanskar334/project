import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-purple-600" />
            <a 
              href="mailto:graphics.sanskar@gmail.com"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              graphics.sanskar@gmail.com
            </a>
          </div>
          <p className="text-center text-gray-500">
            Have suggestions or found an issue? Feel free to reach out!
          </p>
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} AI Directory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}