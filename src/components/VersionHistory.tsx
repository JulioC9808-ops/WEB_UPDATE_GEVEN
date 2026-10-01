import React from 'react';
import { 
  History, 
  Calendar, 
  Monitor, 
  Smartphone, 
  ArrowRight, 
  Download, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { releasesData, ReleaseItem } from '../data/releases';

interface VersionHistoryProps {
  onSelectRelease: (release: ReleaseItem) => void;
}

export const VersionHistory: React.FC<VersionHistoryProps> = ({ onSelectRelease }) => {
  return (
    <section id="historial" className="relative py-24 scroll-mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Registro Histórico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Historial de Versiones
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Línea temporal con todas las actualizaciones publicadas, parches y mejoras continuas.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-yellow-400 via-emerald-400 to-cyan-400 opacity-30 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-8">
            {releasesData.map((release, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={release.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080d11] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/30 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Left / Right Card placement */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'
                  }`}>
                    <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                      
                      {/* Meta */}
                      <div className={`flex items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="text-lg font-bold text-white font-['Outfit']">
                          GEVEN {release.version}
                        </span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${
                          release.platform === 'windows'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {release.platform === 'windows' ? 'Windows' : 'Android'}
                        </span>
                        {release.isLatest && (
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                            Última
                          </span>
                        )}
                      </div>

                      <div className={`text-xs text-slate-400 flex items-center gap-1.5 mb-3 font-mono ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{release.releaseDate}</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {release.summary}
                      </p>

                      {/* Actions */}
                      <div className={`flex items-center gap-3 pt-3 border-t border-white/5 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <a
                          href={release.downloadUrl}
                          className="text-xs text-slate-300 hover:text-emerald-300 flex items-center gap-1 font-semibold"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Descargar ({release.fileSize})</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => onSelectRelease(release)}
                          className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                        >
                          <span>Ver cambios</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
