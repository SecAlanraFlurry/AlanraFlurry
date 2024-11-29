import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div 
        className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 flex justify-end">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-6 py-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="block py-4 text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}