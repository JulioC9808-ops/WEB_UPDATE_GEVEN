import React, { useState } from 'react';
import { 
  Sparkles, 
  Monitor, 
  Smartphone, 
  Calendar, 
  Download, 
  ArrowRight, 
  Tag, 
  FileCode,
  Search
} from 'lucide-react';
import { releasesData, ReleaseItem, Platform } from '../data/releases';

interface UpdatesProps {
  onSelectRelease: (release: ReleaseItem) => void;
}

export const Updates: React.FC<UpdatesProps> = ({ onSelectRelease }) => {
  const [platformFilter, setPlatformFilter] = useState<'all' | Platform>('all');
  const [search, setSearch] = useState('');

  const filteredReleases = releasesData.filter(rel => {
    if (platformFilter !== 'all' && rel.platform !== platformFilter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      rel.version.toLowerCase().includes(q) ||
      rel.title.toLowerCase().includes(q) ||
      rel.summary.toLowerCase().includes(q)
    );
  });

  return (
    <section id="actualizaciones" className="relative py-24 scroll-mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Registro de Novedades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Actualizaciones Disponibles
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Explora las diferentes versiones de GEVEN publicadas para Windows y Android.
            </p>
          </div>

          {/* Platform Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setPlatformFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                platformFilter === 'all'
                  ? 'bg-gradient-to-r from-yellow-400/30 via-emerald-400/30 to-cyan-400/30 text-white border border-emerald-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todas ({releasesData.length})
            </button>
            <button
              onClick={() => setPlatformFilter('windows')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                platformFilter === 'windows'
                  ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Windows</span>
            </button>
            <button
              onClick={() => setPlatformFilter('android')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                platformFilter === 'android'
                  ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android</span>
            </button>
          </div>
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReleases.map((release) => (
            <div
              key={release.id}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-white font-['Outfit']">
                      GEVEN {release.version}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${
                      release.platform === 'windows'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {release.platform === 'windows' ? 'Windows' : 'Android'}
                    </span>
                  </div>

                  {release.isLatest && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Última versión" />
                  )}
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-3 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{release.releaseDate}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {release.summary}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <a
                  href={release.downloadUrl}
                  className="p-2 text-slate-300 hover:text-emerald-300 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-xs flex items-center gap-1 font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectRelease(release)}
                  className="px-3 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 border border-emerald-500/30 text-emerald-200 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all group-hover:translate-x-0.5"
                >
                  <span>Ver cambios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
