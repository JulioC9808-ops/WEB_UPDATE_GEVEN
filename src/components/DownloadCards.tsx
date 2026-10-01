import React, { useState } from 'react';
import { 
  Download, 
  Monitor, 
  Smartphone, 
  ShieldCheck, 
  Copy, 
  Check, 
  HardDrive, 
  FileCode,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const DownloadCards: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <section id="descargas" className="relative py-24 scroll-mt-12 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-yellow-500/10 via-emerald-500/15 to-cyan-500/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Download className="w-3.5 h-3.5" />
            <span>Descargas Oficiales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Descarga GEVEN para tu Plataforma
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Selecciona tu sistema operativo y obtén el instalador oficial libre de publicidad y 100% verificado.
          </p>
        </div>

        {/* 2 Big Download Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* 1. WINDOWS CARD */}
          <div className="glass-panel-elevated rounded-3xl p-7 sm:p-9 border border-emerald-500/30 flex flex-col justify-between relative group hover:border-emerald-400/50 transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400/20 via-emerald-400/20 to-cyan-400/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <Monitor className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                      WINDOWS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
                      GEVEN para Windows
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 block">Versión:</span>
                  <span className="text-sm font-bold text-white font-mono">
                    {siteConfig.downloads.windows.latestVersion}
                  </span>
                </div>
              </div>

              {/* Specs & Info */}
              <div className="bg-black/30 rounded-2xl p-4 border border-white/5 space-y-2.5 mb-6 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Archivo:</span>
                  <span className="text-slate-200 font-semibold truncate max-w-[200px]">
                    {siteConfig.downloads.windows.fileName}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tamaño:</span>
                  <span className="text-emerald-400 font-bold">
                    {siteConfig.downloads.windows.size}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Requisitos:</span>
                  <span className="text-slate-300 font-sans">
                    {siteConfig.downloads.windows.requirements}
                  </span>
                </div>
              </div>

              {/* SHA-256 Hash */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                  <span>Hash SHA-256 Verificado:</span>
                  <button
                    onClick={() => handleCopyHash(siteConfig.downloads.windows.sha256)}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-[11px] font-sans"
                  >
                    {copiedHash === siteConfig.downloads.windows.sha256 ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedHash === siteConfig.downloads.windows.sha256 ? '¡Copiado!' : 'Copiar Hash'}</span>
                  </button>
                </div>
                <div className="p-2 bg-black/60 rounded-xl border border-white/10 text-[10px] font-mono text-slate-400 truncate select-all">
                  {siteConfig.downloads.windows.sha256}
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <a
              href={siteConfig.downloads.windows.url}
              className="w-full py-4 px-5 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 group/btn"
            >
              <Download className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform" />
              <span>Descargar Windows</span>
            </a>
          </div>

          {/* 2. ANDROID CARD */}
          <div className="glass-panel-elevated rounded-3xl p-7 sm:p-9 border border-cyan-500/30 flex flex-col justify-between relative group hover:border-cyan-400/50 transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                      ANDROID
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
                      GEVEN para Android
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 block">Versión:</span>
                  <span className="text-sm font-bold text-cyan-300 font-mono">
                    {siteConfig.downloads.android.latestVersion}
                  </span>
                </div>
              </div>

              {/* Specs & Info */}
              <div className="bg-black/30 rounded-2xl p-4 border border-white/5 space-y-2.5 mb-6 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Archivo:</span>
                  <span className="text-slate-200 font-semibold truncate max-w-[200px]">
                    {siteConfig.downloads.android.fileName}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tamaño:</span>
                  <span className="text-cyan-400 font-bold">
                    {siteConfig.downloads.android.size}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Requisitos:</span>
                  <span className="text-slate-300 font-sans">
                    {siteConfig.downloads.android.requirements}
                  </span>
                </div>
              </div>

              {/* SHA-256 Hash */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                  <span>Hash SHA-256 Verificado:</span>
                  <button
                    onClick={() => handleCopyHash(siteConfig.downloads.android.sha256)}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-[11px] font-sans"
                  >
                    {copiedHash === siteConfig.downloads.android.sha256 ? <Check className="w-3 h-3 text-cyan-300" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedHash === siteConfig.downloads.android.sha256 ? '¡Copiado!' : 'Copiar Hash'}</span>
                  </button>
                </div>
                <div className="p-2 bg-black/60 rounded-xl border border-white/10 text-[10px] font-mono text-slate-400 truncate select-all">
                  {siteConfig.downloads.android.sha256}
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <a
              href={siteConfig.downloads.android.url}
              className="w-full py-4 px-5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 group/btn"
            >
              <Download className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform" />
              <span>Descargar Android</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
