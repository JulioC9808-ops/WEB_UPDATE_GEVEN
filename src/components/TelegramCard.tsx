import React from 'react';
import { Send, Bell, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

export const TelegramCard: React.FC = () => {
  return (
    <section id="telegram" className="relative py-24 scroll-mt-12 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-500/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glass Card Container */}
        <div className="max-w-4xl mx-auto glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Ring */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-yellow-400/20 via-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Icon */}
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-emerald-500 text-slate-950 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/30">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5" />
          </div>

          {/* Title & Body */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
            Recibe las actualizaciones
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed mb-8">
            Únete al canal oficial de GEVEN para recibir avisos sobre nuevas versiones, correcciones y novedades.
          </p>

          {/* Primary Action Button */}
          <a
            href={siteConfig.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            <Send className="w-5 h-5" />
            <span>📢 Canal oficial de Telegram</span>
          </a>

          {/* Feature bullets */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Notificaciones inmediatas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Enlaces directos a APKs y .exe
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              Comunidad de soporte oficial
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
