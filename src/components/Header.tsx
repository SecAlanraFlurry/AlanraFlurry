import React, { useState } from 'react';
import { Menu, Github, Instagram, Mail } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-3 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Alfie A.</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-5">
            <a href="https://github.com/SecAlanraFlurry" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/737max_/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <button 
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}