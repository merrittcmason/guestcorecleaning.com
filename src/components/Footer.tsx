import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Link 1' },
    { path: '/projects', label: 'Link 2' },
    { path: '/testimonials', label: 'Link 3' },
    { path: '/contact', label: 'Link 4' },
  ];

  const socialLinks = [
    { icon: <HelpCircle size={20} />, href: '', label: 'Title' },
    { icon: <HelpCircle size={20} />, href: '', label: 'Title' },
    { icon: <HelpCircle size={20} />, href: '', label: 'Title' },
  ];

  return (
    <footer className={`border-t ${
      isDarkMode ? 'border-white' : 'border-black'
    }`}>
      {/* Top section */}
      <div className={`${isDarkMode ? 'bg-[#222222]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-6">

            {/* Navigation */}
            <div className="text-center">
              <h4 className={`font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>Navigation</h4>
              <div className="flex flex-row space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm transition-colors ${
                      location.pathname === item.path
                        ? (isDarkMode ? 'text-white' : 'text-black')
                        : isDarkMode
                          ? 'text-white hover:text-white/80'
                          : 'text-gray-900 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="text-center">
              <h4 className={`font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>Title</h4>
              <div className="flex flex-row items-center justify-center space-x-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? 'text-white hover:text-white/80 hover:bg-[#222222]'
                        : 'text-gray-900 hover:text-black hover:bg-gray-100'
                    }`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className={`w-full border-t text-center text-sm py-6 ${
          isDarkMode ? 'border-white bg-[#1d1d1d] text-gray-300' : 'border-black bg-gray-50 text-gray-600'
        }`}
      >
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};
