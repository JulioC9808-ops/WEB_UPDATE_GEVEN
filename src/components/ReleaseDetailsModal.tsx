import React from 'react';
import { 
  X, 
  Download, 
  Calendar, 
  Monitor, 
  Smartphone, 
  CheckCircle2, 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  ArrowLeft,
  FileCode,
  HardDrive
} from 'lucide-react';
import { ReleaseItem } from '../data/releases';
import pcScreenPos from '../assets/images/geven_pc_screen_pos_1790873337812.jpg';
import pcInventory from '../assets/images/geven_pc_inventory_screen_1790873364046.jpg';
import androidSplash from '../assets/images/geven_android_splash_1790873350972.jpg';
import androidPos from '../assets/images/geven_android_pos_screen_1790873376850.jpg';

interface ReleaseDetailsModalProps {
  release: ReleaseItem | null;
  onClose: () => void;
}

export const ReleaseDetailsModal: React.FC<ReleaseDetailsModalProps> = ({ release, onClose }) => {
  if (!release) return null;

  const isWindows = release.platform === 'windows';

  // Group changelog items
  const features = release.changelog.filter(c => c.type === 'feature');
  const improvements = release.changelog.filter(c => c.type === 'improvement');
  const fixes = release.changelog.filter(c => c.type === 'fix' || c.type === 'security');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl glass-panel-elevated rounded-3xl border border-emerald-500/30 p-6 sm:p-9 shadow-2xl shadow-emerald-950/80 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Back Button & Close */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al historial</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Release Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl font-extrabold text-white font-['Outfit'] tracking-tight">
                GEVEN {release.version}
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-bold rounded-lg uppercase tracking-wider ${
                isWindows
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              }`}>
                {isWindows ? 'Windows' : 'Android'}
              </span>
              {release.isLatest && (
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                  ÚLTIMA VERSIÓN
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {release.releaseDate}
              </span>
              <span>·</span>
              <span>{release.fileName}</span>
              <span>·</span>
              <span className="text-emerald-400 font-bold">{release.fileSize}</span>
            </div>
          </div>

          <a
            href={release.downloadUrl}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 hover:from-yellow-300 hover:to-cyan-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 shrink-0 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Versión ({release.fileSize})</span>
          </a>
        </div>

        {/* Description */}
        <div className="bg-black/30 rounded-2xl p-5 border border-white/5 mb-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {release.description}
        </div>

        {/* 3 Categories: Novedades, Mejoras, Correcciones */}
        <div className="space-y-6 mb-8">
          
          {/* Novedades (Features) */}
          {features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Nuevas Funcionalidades</span>
              </h4>
              <div className="space-y-2">
                {features.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/20 border border-white/5 text-xs">
                    <div className="font-bold text-white mb-0.5">{item.title}</div>
                    <div className="text-slate-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mejoras (Improvements) */}
          {improvements.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Mejoras de Rendimiento</span>
              </h4>
              <div className="space-y-2">
                {improvements.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/20 border border-white/5 text-xs">
                    <div className="font-bold text-white mb-0.5">{item.title}</div>
                    <div className="text-slate-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Correcciones (Fixes) */}
          {fixes.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Correcciones de Errores & Seguridad</span>
              </h4>
              <div className="space-y-2">
                {fixes.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/20 border border-white/5 text-xs">
                    <div className="font-bold text-white mb-0.5">{item.title}</div>
                    <div className="text-slate-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Visual Screenshots for this version */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
            Capturas de la Versión {release.version}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#070b0e]">
              <img
                src={isWindows ? pcScreenPos : androidSplash}
                alt="Captura GEVEN"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-[#070b0e]">
              <img
                src={isWindows ? pcInventory : androidPos}
                alt="Captura GEVEN"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer / Back action */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al historial de versiones</span>
          </button>

          <a
            href={release.downloadUrl}
            className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Descargar {release.fileName}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
