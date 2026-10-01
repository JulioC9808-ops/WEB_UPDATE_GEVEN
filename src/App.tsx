/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LatestRelease } from './components/LatestRelease';
import { DownloadCards } from './components/DownloadCards';
import { Updates } from './components/Updates';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { VersionHistory } from './components/VersionHistory';
import { TelegramCard } from './components/TelegramCard';
import { Footer } from './components/Footer';
import { ReleaseDetailsModal } from './components/ReleaseDetailsModal';
import { ReleaseItem } from './data/releases';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedRelease, setSelectedRelease] = useState<ReleaseItem | null>(null);

  // Sync dark class on root <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#070b0e] text-slate-100' : 'bg-[#f8fafc] text-slate-900'} flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200 transition-colors duration-300`}>
      
      {/* 1. Glassmorphic Navigation Header */}
      <Header 
        darkMode={darkMode} 
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {/* 2. Hero Principal with Windows & Android Downloads and PC/Android Preview */}
        <Hero />

        {/* 3. Sección "Última Actualización" */}
        <LatestRelease 
          onViewReleaseDetails={(release) => setSelectedRelease(release)}
        />

        {/* 4. Sección "Descarga GEVEN" (Windows & Android Glass Cards) */}
        <DownloadCards />

        {/* 5. Sección "Actualizaciones" (Filterable Releases) */}
        <Updates 
          onSelectRelease={(release) => setSelectedRelease(release)}
        />

        {/* 6. Sección "Conoce GEVEN" (Screenshot Gallery / Carousel) */}
        <ScreenshotGallery />

        {/* 7. Sección "Historial de Versiones" (Timeline) */}
        <VersionHistory 
          onSelectRelease={(release) => setSelectedRelease(release)}
        />

        {/* 8. Sección Telegram Oficial */}
        <TelegramCard />
      </main>

      {/* 9. Footer Oficial */}
      <Footer />

      {/* 10. Individual Release Detail Modal (Simulating /updates/v1.2.0) */}
      <ReleaseDetailsModal
        release={selectedRelease}
        onClose={() => setSelectedRelease(null)}
      />
    </div>
  );
}
