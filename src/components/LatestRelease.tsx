import React from 'react';
import { 
  Sparkles, 
  Monitor, 
  Smartphone, 
  Calendar, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  ShieldAlert,
  Cpu,
  Layers
} from 'lucide-react';
import { latestWindowsRelease, latestAndroidRelease, ReleaseItem } from '../data/releases';

interface LatestReleaseProps {
  onViewReleaseDetails: (release: ReleaseItem) => void;
}

export const LatestRelease: React.FC<LatestReleaseProps> = ({ onViewReleaseDetails }) => {
  return (
    <section className="relative py-20 border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-emerald-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Distribución Oficial Verificada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Última Actualización
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Consulta los paquetes más recientes y sus mejoras en rendimiento, estabilidad y nuevas funciones.
          </p>
        </div>

        {/* 2-Column Latest Releases (Windows + Android) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Windows Latest Card */}
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden group">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white font-['Outfit']">
                        GEVEN {latestWindowsRelease.version}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Windows
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>Fecha: {latestWindowsRelease.releaseDate}</span>
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                  Lanzamiento Oficial
                </span>
              </div>

              {/* Title & Summary */}
              <h3 className="text-base font-bold text-slate-100 mb-2">
                {latestWindowsRelease.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {latestWindowsRelease.summary}
              </p>

              {/* Highlights list */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Resumen de Novedades:
                </span>
                {latestWindowsRelease.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={latestWindowsRelease.downloadUrl}
                className="w-full sm:w-auto flex-1 py-3 px-4 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Windows ({latestWindowsRelease.fileSize})</span>
              </a>

              <button
                type="button"
                onClick={() => onViewReleaseDetails(latestWindowsRelease)}
                className="w-full sm:w-auto py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Ver Novedades Completas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Android Latest Card */}
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden group">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-400" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-500/30">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white font-['Outfit']">
                        GEVEN {latestAndroidRelease.version}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        Android
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>Fecha: {latestAndroidRelease.releaseDate}</span>
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  APK Móvil
                </span>
              </div>

              {/* Title & Summary */}
              <h3 className="text-base font-bold text-slate-100 mb-2">
                {latestAndroidRelease.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {latestAndroidRelease.summary}
              </p>

              {/* Highlights list */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                  Resumen de Novedades:
                </span>
                {latestAndroidRelease.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={latestAndroidRelease.downloadUrl}
                className="w-full sm:w-auto flex-1 py-3 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Android APK ({latestAndroidRelease.fileSize})</span>
              </a>

              <button
                type="button"
                onClick={() => onViewReleaseDetails(latestAndroidRelease)}
                className="w-full sm:w-auto py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Ver Novedades Completas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
