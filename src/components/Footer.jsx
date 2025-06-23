import React from 'react';

function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-gradient-to-t from-black via-gray-950 to-indigo-950 border-t border-purple-500/20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-indigo-600/5 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10 flex flex-col items-center text-center">
        {/* Copyright */}
        <div className="text-gray-300 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">
              © {new Date().getFullYear()}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold ml-2">
                Noah Puthayathu
              </span>
            </span>
          </div>
          <div className="text-sm text-gray-500">
            All rights reserved. Built with passion & code.
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 pt-6 border-t border-purple-500/20 w-full flex justify-center">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
            <span>Crafted with React & Tailwind CSS</span>
            <div
              className="w-1 h-1 bg-indigo-500 rounded-full animate-ping"
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute bottom-4 left-8 w-4 h-4 border-2 border-purple-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-12 w-3 h-3 bg-indigo-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
    </footer>
  );
}

export default Footer;
