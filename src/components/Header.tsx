
import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full instagram-gradient p-2 shadow-lg">
            <Download className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-bold text-xl md:text-2xl text-gradient">ReelGrabber</h2>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                className="text-sm text-gray-300 hover:text-white transition"
              >
                How It Works
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
