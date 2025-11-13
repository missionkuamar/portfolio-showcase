import React from 'react';
import MainLayout from './components/layouts/MainLayout';
import HeroSection from './components/sections/HeroSection';
import IdentityHub from './components/sections/IdentityHub';
import ProjectLab from './components/sections/ProjectLab';
import AIStudio from './components/sections/AIStudio';
import DebugConsole from './components/sections/DebugConsole';
import ContactHub from './components/sections/ContactHub';
import OutroSection from './components/sections/OutroSection';
import './styles/globals.css';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <IdentityHub />
      <ProjectLab />
      <AIStudio />
      <DebugConsole />
      <ContactHub />
      <OutroSection />
    </MainLayout>
  );
}

export default App;