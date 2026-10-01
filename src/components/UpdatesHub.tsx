import React, { useState, useMemo } from 'react';
import { 
  Download, 
  Search, 
  Tag, 
  CheckCircle2, 
  AlertTriangle, 
  Database, 
  ShieldAlert, 
  Sparkles, 
  FileCode, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { RELEASES_DATA } from '../data/releasesData';
import { Release, ReleaseType } from '../types';
import updatesHeroImg from '../assets/images/geven_updates_hero_1790872561590.jpg';

interface UpdatesHubProps {
  onSelectRelease: (release: Release) => void;
  selectedReleaseId?: string | null;
}

export const UpdatesHub: React.FC<UpdatesHubProps> = ({ onSelectRelease }) => {
  const [activeTab, setActiveTab] = useState<'all' | ReleaseType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedReleases, setExpandedReleases] = useState<Record<string, boolean>>({
    'v2.4.0': true,
  });
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const toggleExpand = (version: string) => {
    setExpandedReleases(prev => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  const handleCopy = (hash: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const filteredReleases = useMemo(() => {
    return RELEASES_DATA.filter(release => {
      // Tab filter
      if (activeTab !== 'all') {
        if (activeTab === 'lts' && release.type !== 'lts') return false;
        if (activeTab === 'stable' && release.type !== 'stable') return false;
        if (activeTab === 'beta' && release.type !== 'beta') return false;
        if (activeTab === 'security' && release.type !== 'security') return false;
      }

      // Search filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const matchVersion = release.version.toLowerCase().includes(query);
      const matchTitle = release.title.toLowerCase().includes(query);
      const matchSummary = release.summary.toLowerCase().includes(query);
      const matchChangelog = release.changelog.some(c => 
        c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)
      );

      return matchVersion || matchTitle || matchSummary || matchChangelog;
    });
  }, [activeTab, searchQuery]);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'feature':
        return { label: 'Nueva Función', color: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30' };
      case 'improvement':
        return { label: 'Optimización', color: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30' };
      case 'fix':
        return { label: 'Corrección', color: 'text-amber-400 bg-amber-950/60 border-amber-500/30' };
      case 'security':
        return { label: 'Seguridad', color: 'text-rose-400 bg-rose-950/60 border-rose-500/30' };
      case 'database':
        return { label: 'Base de Datos', color: 'text-purple-400 bg-purple-950/60 border-purple-500/30' };
      default:
        return { label: 'Cambio', color: 'text-slate-400 bg-slate-900 border-white/10' };
    }
  };

  const getTypeBadge = (type: ReleaseType) => {
    switch (type) {
      case 'stable':
        return <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Estable Oficial</span>;
      case 'lts':
        return <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">Soporte Extendido LTS</span>;
      case 'security':
        return <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">Parche de Seguridad</span>;
      case 'beta':
        return <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">Pre-lanzamiento (Beta)</span>;
    }
  };

  return (
    <section id="actualizaciones" className="relative py-24 scroll-mt-12 border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Centro de Distribución Oficial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Registro de Actualizaciones & Descargas
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Descarga ejecutables oficiales, parches incrementales y revisa el registro detallado 
              de cambios para mantener tu negocio al día.
            </p>
          </div>

          {/* Banner Graphic Mini Card */}
          <div className="hidden lg:flex items-center gap-4 p-3 rounded-2xl glass-card border-emerald-500/20 max-w-sm">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <img
                src={updatesHeroImg}
                alt="Actualizaciones GEVEN"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">Canal Oficial de Releases</div>
              <div className="text-slate-400 mt-0.5">Binarios firmados y verificados criptográficamente.</div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
          
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto p-1 bg-black/40 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Todas las Versiones ({RELEASES_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('stable')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'stable'
                  ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Estables Oficiales
            </button>
            <button
              onClick={() => setActiveTab('lts')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'lts'
                  ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Versiones LTS
            </button>
            <button
              onClick={() => setActiveTab('beta')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'beta'
                  ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Beta / Preview
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en changelogs, bugs o módulos..."
              className="w-full pl-9 pr-4 py-2 bg-black/50 border border-white/10 focus:border-emerald-400/60 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Releases List */}
        <div className="space-y-6">
          {filteredReleases.length === 0 ? (
            <div className="text-center py-16 glass-card rounded-2xl border border-white/5">
              <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">No se encontraron versiones</h3>
              <p className="text-xs text-slate-400 mt-1">Prueba con otro término de búsqueda o cambia de filtro.</p>
            </div>
          ) : (
            filteredReleases.map((release) => {
              const isExpanded = !!expandedReleases[release.version];

              return (
                <article
                  key={release.version}
                  className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                    release.isLatest 
                      ? 'border-emerald-500/40 shadow-xl shadow-emerald-950/40' 
                      : 'border-white/10 hover:border-emerald-500/25'
                  }`}
                >
                  {/* Card Header & Primary Info */}
                  <div 
                    onClick={() => toggleExpand(release.version)}
                    className="p-6 cursor-pointer select-none flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-2xl font-extrabold text-white font-['Outfit'] tracking-tight">
                          {release.version}
                        </span>
                        {getTypeBadge(release.type)}
                        {release.isLatest && (
                          <span className="px-2.5 py-0.5 text-xs font-bold rounded bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm">
                            ÚLTIMA VERSIÓN
                          </span>
                        )}
                        <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span aria-hidden="true">·</span>
                          <span>{release.releaseDate}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-slate-400">{release.tag}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-slate-100">
                        {release.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                        {release.summary}
                      </p>
                    </div>

                    {/* Quick Action Button & Expand Toggle */}
                    <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
                      <a
                        href={release.assets[0]?.downloadUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar ({release.assets[0]?.size})</span>
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(release.version);
                        }}
                        className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
                        aria-label={isExpanded ? 'Contraer detalles' : 'Expandir detalles'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Section: Highlights, Changelog & Binary Assets */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-6 animate-in fade-in duration-200">
                      
                      {/* Highlights */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Puntos Destacados de la Versión</span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {release.highlights.map((highlight, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-slate-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Changelog Table / List */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Registro Completo de Cambios</span>
                        </h4>

                        <div className="space-y-2">
                          {release.changelog.map((item, idx) => {
                            const badge = getCategoryBadge(item.category);
                            return (
                              <div
                                key={idx}
                                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 p-3 rounded-xl bg-black/20 border border-white/5 text-xs"
                              >
                                <span className={`px-2 py-0.5 text-[10px] font-bold rounded border uppercase tracking-wider shrink-0 w-fit ${badge.color}`}>
                                  {badge.label}
                                </span>
                                <div>
                                  <span className="font-semibold text-slate-200 mr-2">{item.title}:</span>
                                  <span className="text-slate-400">{item.description}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Database Migration Notice */}
                      {release.databaseMigrationRequired ? (
                        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
                          <Database className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Migración de Esquema de Base de Datos Requerida:</span>{' '}
                            <span>
                              Esta versión incluye nuevas columnas para compras y proveedores. El instalador ejecutará la migración SQL automáticamente en el primer arranque sin alterar tus registros.
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-xs text-emerald-400/90 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>No requiere migración manual de base de datos. 100% retrocompatible.</span>
                        </div>
                      )}

                      {/* Download Assets Grid with SHA-256 Checksums */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Download className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Paquetes de Instalación y Binarios</span>
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {release.assets.map((asset, idx) => (
                            <div
                              key={idx}
                              className="glass-card p-4 rounded-xl border border-white/5 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="font-bold text-xs text-white truncate max-w-[170px]" title={asset.name}>
                                    {asset.name}
                                  </span>
                                  <span className="text-xs font-mono text-emerald-400 font-semibold">{asset.size}</span>
                                </div>
                                <p className="text-[11px] text-slate-400 mb-3">{asset.compatibility}</p>

                                {/* Checksum block */}
                                <div className="mb-4">
                                  <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                                    <span>SHA-256</span>
                                    <button
                                      onClick={(e) => handleCopy(asset.sha256, e)}
                                      className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-sans"
                                    >
                                      {copiedHash === asset.sha256 ? <Check className="w-2.5 h-2.5 text-emerald-300" /> : <Copy className="w-2.5 h-2.5" />}
                                      <span>{copiedHash === asset.sha256 ? 'Copiado' : 'Copiar'}</span>
                                    </button>
                                  </div>
                                  <div className="p-1.5 bg-black/60 border border-white/10 rounded text-[10px] font-mono text-slate-400 truncate">
                                    {asset.sha256}
                                  </div>
                                </div>
                              </div>

                              <a
                                href={asset.downloadUrl}
                                className="w-full py-2 px-3 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-200 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Descargar Paquete</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
