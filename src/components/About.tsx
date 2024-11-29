import React from 'react';
import { Code, Server, Palette } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Enthusiast Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Senior High School Student',
    description: 'Student at Tunas Bangsa Senior High School, Bintan, Riau Island.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences with attention to detail and accessibility.',
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            I'm a FrontEnd Web Development Enthusiast.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}