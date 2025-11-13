import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import CommandLine from '../ui/CommandLine';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neo-black text-white" data-theme="carbon-neo">
        <ThemeToggle />
        <CommandLine />
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;