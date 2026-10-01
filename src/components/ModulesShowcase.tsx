import React, { useState } from 'react';
import { 
  ShoppingCart, 
  PackageCheck, 
  Coins, 
  UsersRound, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { SYSTEM_MODULES } from '../data/modulesData';
import { SystemModule } from '../types';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  PackageCheck,
  Coins,
  UsersRound,
  BarChart3,
  ShieldCheck
};

export const ModulesShowcase: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<SystemModule>(SYSTEM_MODULES[0]);

  return (
    <section id="modulos" className="relative py-24 scroll-mt-12 border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-800/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Suite Integral de Gestión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Módulos Diseñados para Operar sin Fricción
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Cada módulo de GEVEN está construido para resolver tareas críticas de tu negocio
            con tiempos de respuesta instantáneos y control total sobre el efectivo y la mercancía.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEM_MODULES.map((module, index) => {
            const Icon = iconMap[module.iconName] || ShoppingCart;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={module.id}
                onClick={() => setSelectedModule(module)}
                className={`glass-panel rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  selectedModule.id === module.id
                    ? 'border-emerald-500/50 bg-emerald-950/20 shadow-xl shadow-emerald-950/50 ring-1 ring-emerald-400/30'
                    : 'border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.02]'
                } ${isFeatured && index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                        module.accentColor === 'amber'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:scale-110'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:scale-110'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                          {module.subtitle}
                        </span>
                        <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-emerald-300 transition-colors">
                          {module.title}
                        </h3>
                      </div>
                    </div>

                    {module.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10 rounded">
                        {module.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {module.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Footer */}
                {module.metrics && (
                  <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3 mt-auto">
                    {module.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-black/30 rounded-xl p-2.5 border border-white/5">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                        <div className="text-sm font-bold text-white font-['Outfit'] font-mono">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
