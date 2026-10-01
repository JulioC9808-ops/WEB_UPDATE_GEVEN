import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  AlertCircle, 
  Database,
  History,
  FileCheck2
} from 'lucide-react';
import { RELEASES_DATA } from '../data/releasesData';

interface VersionCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VersionCheckerModal: React.FC<VersionCheckerModalProps> = ({ isOpen, onClose }) => {
  const [currentVersion, setCurrentVersion] = useState('v2.3.0');
  const [checked, setChecked] = useState(false);

  if (!isOpen) return null;

  const latest = RELEASES_DATA[0]; // v2.4.0
  const isUpToDate = currentVersion === latest.version;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl glass-panel-elevated rounded-2xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/80 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">
              Asistente de Actualización GEVEN
            </h3>
            <p className="text-xs text-slate-400">
              Verifica compatibilidad, parches automáticos y novedades disponibles
            </p>
          </div>
        </div>

        {/* Form Selector */}
        <form onSubmit={handleCheck} className="space-y-4 mb-6">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
              Selecciona o introduce tu versión actual instalada:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {['v2.1.0', 'v2.2.4', 'v2.3.0', 'v2.3.5', 'v2.4.0'].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setCurrentVersion(v);
                    setChecked(true);
                  }}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                    currentVersion === v
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-sm shadow-emerald-500/20'
                      : 'bg-black/40 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {v} {v === 'v2.4.0' ? '(Actual)' : ''}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={currentVersion}
                onChange={(e) => {
                  setCurrentVersion(e.target.value);
                  setChecked(false);
                }}
                placeholder="Ej: v2.2.0"
                className="flex-1 px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Comprobar
              </button>
            </div>
          </div>
        </form>

        {/* Diagnosis & Recommendations */}
        {checked && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {isUpToDate ? (
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-white">¡Tu sistema GEVEN está 100% actualizado!</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Estás ejecutando la versión <span className="font-mono text-emerald-400 font-bold">{latest.version}</span> con los últimos parches de rendimiento y auditoría de caja.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Status Box */}
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">¡Nueva versión disponible!</span>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-400 text-slate-950">
                        {latest.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Tu versión actual (<span className="font-mono text-amber-400">{currentVersion}</span>) puede actualizarse directamente a la versión <span className="font-mono text-emerald-400">{latest.version}</span> sin riesgo de pérdida de base de datos.
                    </p>
                  </div>
                </div>

                {/* Benefits / Gained Features */}
                <div className="glass-card p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                    Mejoras que obtendrás con esta actualización:
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Búsqueda de códigos de barra ultra rápida (&lt; 15ms)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Arqueo Z con desglose multidivisas y comisiones bancarias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Soporte para balanzas electrónicas de peso en tiempo real</span>
                    </li>
                  </ul>
                </div>

                {/* Recommended Download Path */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-white">Descarga Recomendada para ti:</div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {currentVersion.startsWith('v2.3') ? 'GEVEN-UpdatePatch-v2.3.x-to-v2.4.0.exe (14.2 MB)' : 'GEVEN-Setup-v2.4.0-x64.exe (48.6 MB)'}
                    </div>
                  </div>

                  <a
                    href={latest.assets[0].downloadUrl}
                    className="px-4 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 shrink-0 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Iniciar Descarga</span>
                  </a>
                </div>

                {/* Safety Tips */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 px-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Consejo: Genera un respaldo rápido desde "Ajustes &gt; Base de Datos" antes de ejecutar el instalador.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Soporte GEVEN Oficial</span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
