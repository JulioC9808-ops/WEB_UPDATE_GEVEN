import React from 'react';
import { Download, Send, Monitor, Smartphone, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#05080a] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-2 space-y-4">
            <Logo size={44} showText={true} textSize="text-xl" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              GEVEN (Gestión de Ventas) es el sistema de punto de venta, control de inventario y facturación 
              diseñado para negocios que buscan rapidez, orden y total privacidad en sus operaciones locales.
            </p>

            <div className="text-xs text-slate-500">
              Sitio oficial de actualizaciones y descargas para Windows y Android.
            </div>
          </div>

          {/* Col 2: Navigation Enlaces */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-['Outfit']">
              Enlaces
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#actualizaciones" className="hover:text-emerald-400 transition-colors">
                  Actualizaciones
                </a>
              </li>
              <li>
                <a href="#descargas" className="hover:text-emerald-400 transition-colors">
                  Descargas
                </a>
              </li>
              <li>
                <a href="#capturas" className="hover:text-emerald-400 transition-colors">
                  Capturas
                </a>
              </li>
              <li>
                <a href="#historial" className="hover:text-emerald-400 transition-colors">
                  Historial de versiones
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Descargas oficiales */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-['Outfit']">
              Descargas oficiales
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a 
                  href={siteConfig.downloads.windows.url}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Monitor className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">GEVEN para Windows</div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {siteConfig.downloads.windows.latestVersion} · {siteConfig.downloads.windows.size}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.downloads.android.url}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">GEVEN para Android</div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {siteConfig.downloads.android.latestVersion} · {siteConfig.downloads.android.size}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 text-[11px] pt-1"
                >
                  <span>Avisos de nuevas versiones en Telegram</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {siteConfig.year} {siteConfig.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privacidad 100% Local</span>
            <span aria-hidden="true">·</span>
            <span>Windows & Android</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
