import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Download, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Zap
} from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';
import pcScreenPos from '../assets/images/geven_pc_screen_pos_1790873337812.jpg';
import androidSplash from '../assets/images/geven_android_splash_1790873350972.jpg';
import androidPos from '../assets/images/geven_android_pos_screen_1790873376850.jpg';

export const Hero: React.FC = () => {
  const [activePreview, setActivePreview] = useState<'pc' | 'android'>('pc');
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);

  const handlePlayDemo = () => {
    setIsPlayingIntro(true);
    setTimeout(() => {
      setIsPlayingIntro(false);
    }, 4500);
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Glows matching the Logo Palette (Yellow-Lime-Emerald-Cyan) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-yellow-500/15 via-emerald-500/20 to-cyan-500/20 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-yellow-400/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[350px] bg-cyan-500/15 blur-[150px] pointer-events-none -z-10" />

      {/* Subtle Grid Dot Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo & Kicker Badge */}
        <div className="flex flex-col items-center text-center mb-8">
          
          <div className="mb-4 inline-flex p-1.5 rounded-full bg-gradient-to-r from-yellow-400/20 via-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 backdrop-blur-md shadow-lg shadow-emerald-950/40">
            <div className="flex items-center gap-2.5 px-4 py-1 rounded-full bg-black/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300">
                Portal Oficial de Descargas & Actualizaciones
              </span>
            </div>
          </div>

          {/* Large Hero Icon */}
          <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
            <Logo size={96} showText={false} />
          </div>

          {/* Main Title with Logo Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.08] mb-4 [text-wrap:balance]">
            GEVEN —{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              Gestión de Ventas
            </span>
          </h1>

          {/* Descriptive Tagline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Gestiona tus ventas de forma sencilla, organizada y eficiente.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
            Sistema de punto de venta, inventario y facturación disponible para{' '}
            <strong className="text-slate-200 font-semibold">Windows</strong> y{' '}
            <strong className="text-slate-200 font-semibold">Android</strong> con 100% de privacidad local.
          </p>

          {/* Download Buttons [ 🖥️ Descargar para Windows ] & [ 📱 Descargar para Android ] */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={siteConfig.downloads.windows.url}
              className="group px-6 py-3.5 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 text-slate-950 font-bold text-sm rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Monitor className="w-4 h-4 text-slate-950" />
              <span>Descargar para Windows</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-black/20 rounded-md">
                v1.2.0
              </span>
            </a>

            <a
              href={siteConfig.downloads.android.url}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-emerald-400/40 text-white font-bold text-sm rounded-2xl backdrop-blur-md shadow-lg shadow-black/40 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Descargar para Android</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md">
                v1.3 APK
              </span>
            </a>
          </div>

          <div className="flex items-center gap-6 mt-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sin suscripciones mensuales
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 100% Funcional Offline
            </span>
          </div>
        </div>

        {/* Section 8: Visual Hero Element - Floating Application Window with Preview & Intro.mp4 simulator */}
        <div className="relative mt-8 max-w-5xl mx-auto">
          
          {/* Glass Header Toolbar */}
          <div className="glass-panel-elevated rounded-2xl p-2 sm:p-3 border border-emerald-500/25 shadow-2xl overflow-hidden group">
            
            {/* Window Controls & Platform Switcher */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  GEVEN {activePreview === 'pc' ? 'Desktop POS (Windows)' : 'Mobile Terminal (Android)'}
                </span>
              </div>

              {/* Segmented Platform Selector */}
              <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setActivePreview('pc')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activePreview === 'pc'
                      ? 'bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>PC (intro.mp4)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreview('android')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activePreview === 'android'
                      ? 'bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android (Splash)</span>
                </button>
              </div>
            </div>

            {/* Application Screen Container */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#060a0d] flex items-center justify-center">
              
              {activePreview === 'pc' ? (
                /* PC Mode Screen */
                isPlayingIntro ? (
                  /* Simulated Intro Video Animation */
                  <div className="absolute inset-0 bg-gradient-to-br from-[#060a0d] via-[#0b141a] to-[#04080a] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-2xl animate-pulse" />
                      <Logo size={120} showText={false} className="relative z-10 animate-bounce" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-white font-['Outfit'] mb-2">
                      GEVEN — Gestión de Ventas
                    </h2>
                    <p className="text-xs text-emerald-300 font-mono tracking-widest uppercase mb-4">
                      Iniciando Motor Local de Facturación v1.2.0...
                    </p>
                    <div className="w-64 h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 rounded-full w-full animate-pulse" />
                    </div>
                  </div>
                ) : (
                  /* Standard PC Screen */
                  <div className="relative w-full h-full">
                    <img
                      src={pcScreenPos}
                      alt="GEVEN PC Interface"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Intro Overlay Button */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={handlePlayDemo}
                        className="px-5 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Ver Animación de Inicio (intro.mp4)</span>
                      </button>
                    </div>

                    <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Demostración de escritorio: intro.mp4 + Ventana POS</span>
                    </div>
                  </div>
                )
              ) : (
                /* Android Screen */
                <div className="relative w-full h-full flex items-center justify-center bg-[#070b0e] p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full items-center">
                    
                    {/* Splash Screen */}
                    <div className="h-full max-h-[360px] rounded-2xl overflow-hidden border border-emerald-500/30 glass-card p-4 flex flex-col items-center justify-center text-center relative">
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] text-emerald-300 font-mono">
                        Android Splash Screen
                      </div>
                      <Logo size={90} showText={false} className="mb-3" />
                      <div className="text-sm font-bold text-white">GEVEN Mobile v1.3</div>
                      <div className="text-[11px] text-slate-400">Cargando base de datos local...</div>
                      <div className="w-32 h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-emerald-400 w-2/3" />
                      </div>
                    </div>

                    {/* Mobile POS Touch Interface */}
                    <div className="h-full max-h-[360px] rounded-2xl overflow-hidden border border-white/10 glass-card relative">
                      <img
                        src={androidPos}
                        alt="Android POS Screen"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/70 text-[10px] text-white">
                        Venta táctil en mesa o mostrador
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Quick Metrics Bar below preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="glass-card rounded-xl p-3 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Windows</div>
              <div className="text-sm font-bold text-white font-mono">v1.2.0 Estable</div>
            </div>
            <div className="glass-card rounded-xl p-3 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Android</div>
              <div className="text-sm font-bold text-emerald-400 font-mono">v1.3 APK</div>
            </div>
            <div className="glass-card rounded-xl p-3 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Arqueo Z</div>
              <div className="text-sm font-bold text-cyan-400 font-mono">Multidivisa</div>
            </div>
            <div className="glass-card rounded-xl p-3 border border-white/5 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Canal Oficial</div>
              <div className="text-sm font-bold text-yellow-400">@Gestion_Ventas</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
