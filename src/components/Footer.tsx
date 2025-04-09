
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-12">
      <div className="container mx-auto">
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} ReelGrabber. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </a>
              <a 
                href="#contact" 
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>ReelGrabber is not affiliated with Instagram or Meta Platforms, Inc.</p>
            <p className="mt-1">This service is intended for personal use only.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
