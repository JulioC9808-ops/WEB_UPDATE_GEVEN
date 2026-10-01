import React, { useState } from 'react';
import { 
  BookOpen, 
  DownloadCloud, 
  RefreshCw, 
  DatabaseBackup, 
  CheckCircle2, 
  Copy, 
  Check, 
  FolderLock, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const InstallGuide: React.FC = () => {
  const [activeGuideTab, setActiveGuideTab] = useState<'new' | 'upgrade' | 'backup'>('upgrade');
  const [copiedScript, setCopiedScript] = useState(false);

  const backupCommand = 'GEVEN.exe --export-backup "C:\\Backups\\GEVEN_Backup_%DATE%.db"';

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(backupCommand);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <section id="guia" className="relative py-24 scroll-mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guía Oficial del Administrador</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Guía Rápida de Instalación & Actualización
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Aprende a instalar por primera vez, actualizar a la versión más reciente sin perder registros
            o generar respaldos de seguridad automáticos.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-black/50 border border-white/10 rounded-2xl">
            <button
              onClick={() => setActiveGuideTab('upgrade')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeGuideTab === 'upgrade'
                  ? 'bg-gradient-to-r from-emerald-500/30 to-emerald-600/30 text-emerald-200 border border-emerald-400/40 shadow-lg shadow-emerald-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>Actualizar Versión Existente</span>
            </button>
            <button
              onClick={() => setActiveGuideTab('new')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeGuideTab === 'new'
                  ? 'bg-gradient-to-r from-emerald-500/30 to-emerald-600/30 text-emerald-200 border border-emerald-400/40 shadow-lg shadow-emerald-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <DownloadCloud className="w-4 h-4 text-emerald-400" />
              <span>Instalación Nueva (Paso a Paso)</span>
            </button>
            <button
              onClick={() => setActiveGuideTab('backup')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeGuideTab === 'backup'
                  ? 'bg-gradient-to-r from-emerald-500/30 to-emerald-600/30 text-emerald-200 border border-emerald-400/40 shadow-lg shadow-emerald-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <DatabaseBackup className="w-4 h-4 text-amber-400" />
              <span>Copias de Seguridad (Backup)</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: UPGRADE GUIDE */}
        {activeGuideTab === 'upgrade' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Copia de Seguridad Preventiva
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Abre tu versión actual de GEVEN. Dirígete a <strong className="text-white">Ajustes &gt; Base de Datos &gt; Exportar Copia de Seguridad</strong> y guarda el archivo en una memoria USB o carpeta segura.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
                ✓ Tiempo estimado: 30 segundos
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold font-mono text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Ejecutar el Instalador Oficial
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Descarga el instalador <code className="text-emerald-300 font-mono">GEVEN-Setup-v2.4.0-x64.exe</code> desde este portal y ejecútalo. El asistente detectará tu instalación anterior automáticamente.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
                ✓ No requiere desinstalar la versión anterior
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Auto-Migración y Listo
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Inicia GEVEN v2.4.0. El motor aplicará las optimizaciones de tablas en menos de 2 segundos. Tus ventas, inventario, clientes y configuraciones estarán intactas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-amber-300 font-medium">
                ✓ Verificación de integridad completada
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: FRESH INSTALL */}
        {activeGuideTab === 'new' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Descargar e Iniciar
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Descarga el paquete instalador o la versión Portable si deseas ejecutar GEVEN directamente desde un pendrive USB sin permisos de administrador.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
                ✓ Tamaño ligero: 48.6 MB
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Asistente de Negocio
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Al abrir el sistema por primera vez, ingresa el nombre de tu empresa, moneda principal (USD, EUR, Pesos, etc.), tasa de impuesto y logotipo para tickets.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400">
                ✓ Asistente de 3 preguntas rápidas
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-white font-['Outfit'] mb-2">
                  Importa tu Inventario
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Carga tu catálogo desde tu archivo Excel o comienza a escanear productos con tu lector de códigos de barras. ¡Tu punto de venta ya está listo para cobrar!
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
                ✓ Soporte plantilla Excel incluida
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: BACKUPS */}
        {activeGuideTab === 'backup' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2">
                  Respaldos Automáticos e Inviolables
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  En GEVEN tus datos nunca dependen de servidores externos. Puedes configurar respaldos 
                  automáticos diarios al cerrar caja o ejecutar una copia manual instantánea con 1 clic.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Copia atómica completa (Ventas, Inventario, Clientes, Cajas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Compatible con almacenamiento en Google Drive, OneDrive o USB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Restauración en 1 solo clic en caso de cambio de computador</span>
                  </div>
                </div>
              </div>

              {/* Command line backup snippet */}
              <div className="bg-black/60 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono text-[11px]">Comando CLI / Tarea Programada de Windows:</span>
                  <button
                    onClick={handleCopyCmd}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-xs"
                  >
                    {copiedScript ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedScript ? '¡Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
                <div className="p-3 bg-black/80 rounded-lg text-emerald-300 font-mono text-xs overflow-x-auto select-all border border-white/5">
                  {backupCommand}
                </div>
                <div className="text-[11px] text-slate-500 mt-2">
                  Puedes añadir este comando al Programador de Tareas de Windows para respaldos desatendidos cada medianoche.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
