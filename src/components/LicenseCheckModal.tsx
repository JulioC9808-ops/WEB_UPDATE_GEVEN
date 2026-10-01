import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  KeyRound, 
  CheckCircle, 
  AlertCircle, 
  Cpu, 
  Laptop, 
  Sparkles,
  Layers
} from 'lucide-react';

interface LicenseCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseCheckModal: React.FC<LicenseCheckModalProps> = ({ isOpen, onClose }) => {
  const [licenseKey, setLicenseKey] = useState('GEVEN-PRO-8892-7419-X9A2');
  const [checking, setChecking] = useState(false);
  const [verified, setVerified] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseKey.trim()) return;
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setVerified(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg glass-panel-elevated rounded-2xl border border-emerald-500/30 p-6 sm:p-7 shadow-2xl shadow-emerald-950/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
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
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">
              Verificador de Licencia & Activación GEVEN
            </h3>
            <p className="text-xs text-slate-400">
              Consulta el estado de tu clave de producto y terminales autorizadas
            </p>
          </div>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleVerify} className="space-y-4 mb-6">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
              Introduce tu Clave de Licencia (Serial):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={licenseKey}
                onChange={(e) => {
                  setLicenseKey(e.target.value.toUpperCase());
                  setVerified(false);
                }}
                placeholder="GEVEN-PRO-XXXX-XXXX-XXXX"
                className="flex-1 px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs font-mono text-emerald-300 placeholder-slate-600 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                disabled={checking}
                className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
              >
                {checking ? 'Validando...' : 'Verificar'}
              </button>
            </div>
          </div>
        </form>

        {/* Verified Result Card */}
        {verified && (
          <div className="space-y-4 p-4 rounded-xl bg-black/40 border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Licencia Oficial GEVEN PRO Activa</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                PERPETUA (DE POR VIDA)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block mb-0.5">Terminales Habilitadas:</span>
                <span className="font-bold text-white font-mono">Ilimitadas (Red Local)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block mb-0.5">Actualizaciones Gratuitas:</span>
                <span className="font-bold text-emerald-400">Incluidas v2.x.x</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block mb-0.5">Módulos Activos:</span>
                <span className="font-semibold text-slate-200">POS + Inventario + Caja Z</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <span className="text-[10px] text-slate-400 block mb-0.5">Soporte Técnico:</span>
                <span className="font-semibold text-slate-200">Prioritario 24/7</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>¿Necesitas una nueva licencia o clave adicional?</span>
          <a
            href="https://github.com/JulioC9808-ops/Gestion-de-ventas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            Contactar Equipo
          </a>
        </div>
      </div>
    </div>
  );
};
