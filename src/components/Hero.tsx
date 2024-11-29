import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left md:pl-8 lg:pl-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Frontend WebDev Enthusiast
              <span className="block text-blue-600 mt-2">Building Digital Experiences</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              I'm learning to build beautiful, user-friendly websites and applications using modern technologies. I'm also interested in IoT Development.
              Let's learn together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-[280px] sm:max-w-sm md:max-w-none px-4">
            <img
              src="https://avatars.githubusercontent.com/u/69390694?s=400&u=b76ef960fa4b8b2b640652ea951ffcf8d4159358&v=4"
              alt="Profile"
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-auto border-8 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}