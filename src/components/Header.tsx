import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon, Send } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onNavigateToRelease?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Actualizaciones', href: '#actualizaciones' },
    { label: 'Descargas', href: '#descargas' },
    { label: 'Capturas', href: '#capturas' },
    { label: 'Historial', href: '#historial' },
    { label: 'Telegram', href: '#telegram' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080d11]/85 dark:bg-[#080d11]/85 light:bg-white/85 backdrop-blur-xl border-b border-emerald-500/20 dark:border-emerald-500/20 py-3 shadow-xl'
          : 'bg-transparent border-b border-white/5 dark:border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo & Title */}
        <a 
          href="#inicio" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl"
        >
          <Logo size={42} showText={true} textSize="text-xl" />
        </a>

        {/* Center: Navigation Options */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions (Theme toggle + Quick Download) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Light / Dark Mode Switch */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-300 dark:text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors focus:outline-none"
            aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Telegram Channel Button */}
          <a
            href={siteConfig.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-xl transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

          {/* Download Windows v1.2.0 */}
          <a
            href="#descargas"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar GEVEN</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Switcher */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
            aria-label="Cambiar tema"
          >
            {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-emerald-500/20 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={siteConfig.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 rounded-xl"
            >
              <Send className="w-3.5 h-3.5" />
              Canal Oficial de Telegram
            </a>
            <a
              href="#descargas"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 rounded-xl"
            >
              <Download className="w-4 h-4" />
              Descargar GEVEN (Windows & Android)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
