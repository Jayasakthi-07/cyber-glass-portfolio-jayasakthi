import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header will go here */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                JAYASAKTHI
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer will go here */}
      <footer className="backdrop-blur-md bg-black/30 border-t border-cyan-500/20 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 JAYASAKTHI DHARMARAJAN. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
