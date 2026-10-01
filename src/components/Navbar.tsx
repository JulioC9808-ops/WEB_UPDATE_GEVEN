import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck, Menu, X, Sparkles } from 'lucide-react';
import logoImg from '../assets/images/geven_brand_logo_1790872539483.jpg';

interface NavbarProps {
  onOpenVersionChecker: () => void;
  onOpenLicenseCheck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVersionChecker, onOpenLicenseCheck }) => {
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
    { label: 'Actualizaciones', href: '#actualizaciones' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Demo POS', href: '#demo-interactiva' },
    { label: 'Requisitos', href: '#requisitos' },
    { label: 'Instalación', href: '#guia' },
    { label: 'Soporte', href: '#soporte' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#091014]/80 backdrop-blur-xl border-b border-emerald-500/15 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single-Element Brand Zone */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-gradient-to-br from-emerald-400 via-emerald-600 to-amber-500 shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform duration-200">
            <img
              src={logoImg}
              alt="GEVEN Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[10px]"
              onError={(e) => {
                // Fallback container
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
              GEVEN
            </span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wider">
              PRO
            </span>
          </div>
        </a>

        {/* Zone 2: 4–6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-400 transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1–2 Primary Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenVersionChecker}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verificar Mi Versión</span>
          </button>

          <a
            href="#actualizaciones"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar v2.4.0</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none"
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVersionChecker();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Verificar Actualización
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLicenseCheck();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Validar Licencia
            </button>
            <a
              href="#actualizaciones"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg"
            >
              <Download className="w-4 h-4" />
              Descargar v2.4.0 Estable
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
