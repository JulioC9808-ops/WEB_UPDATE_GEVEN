import React, { useState, useEffect } from 'react';
import { 
  MonitorCheck, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Printer, 
  WifiOff, 
  Check, 
  ShieldCheck,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { SYSTEM_REQUIREMENTS } from '../data/releasesData';

export const SystemRequirements: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<{
    os: string;
    screen: string;
    cores: number;
    isCompatible: boolean;
  }>({
    os: 'Windows / Compatible',
    screen: '1920x1080',
    cores: 4,
    isCompatible: true
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent;
      let detectedOS = 'Windows (Desktop Compatible)';
      if (userAgent.indexOf('Win') !== -1) detectedOS = 'Microsoft Windows';
      else if (userAgent.indexOf('Mac') !== -1) detectedOS = 'macOS (Vía Wine / VM)';
      else if (userAgent.indexOf('Linux') !== -1) detectedOS = 'Linux (Vía Mono / Wine)';

      setDeviceInfo({
        os: detectedOS,
        screen: `${window.screen.width} x ${window.screen.height}`,
        cores: navigator.hardwareConcurrency || 4,
        isCompatible: true
      });
    }
  }, []);

  return (
    <section id="requisitos" className="relative py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <MonitorCheck className="w-3.5 h-3.5" />
            <span>Compatibilidad & Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Requisitos del Sistema & Especificaciones
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            GEVEN está optimizado en código nativo para funcionar con fluidez incluso en equipos 
            de caja económicos o terminales Todo-en-Uno (All-In-One POS).
          </p>
        </div>

        {/* Live Device Test Banner */}
        <div className="glass-panel-elevated rounded-2xl p-5 mb-10 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Diagnóstico Rápido de tu Computador:</span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-400 text-slate-950">
                  APTO PARA GEVEN
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Sistema detectado: <span className="text-slate-200 font-semibold">{deviceInfo.os}</span> · Resolución: <span className="text-slate-200 font-semibold">{deviceInfo.screen}</span> · Núcleos CPU: <span className="text-slate-200 font-semibold">{deviceInfo.cores}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 shrink-0">
            <Check className="w-4 h-4" />
            <span>100% de compatibilidad garantizada</span>
          </div>
        </div>

        {/* Requirements Table Card */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/40 text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                  <th className="py-4 px-6">Componente</th>
                  <th className="py-4 px-6">Requisito Mínimo</th>
                  <th className="py-4 px-6 text-emerald-400">Recomendado (Óptimo)</th>
                  <th className="py-4 px-6">Detalles de Compatibilidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SYSTEM_REQUIREMENTS.map((req, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white font-['Outfit'] whitespace-nowrap">
                      {req.component}
                    </td>
                    <td className="py-4 px-6 text-slate-300 font-mono text-xs">
                      {req.minimum}
                    </td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold font-mono text-xs">
                      {req.recommended}
                    </td>
                    <td className="py-4 px-6 text-slate-400 text-xs">
                      {req.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
