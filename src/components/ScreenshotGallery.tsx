import React, { useState } from 'react';
import { 
  Images, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Monitor, 
  Smartphone,
  Sparkles
} from 'lucide-react';
import pcScreenPos from '../assets/images/geven_pc_screen_pos_1790873337812.jpg';
import pcInventory from '../assets/images/geven_pc_inventory_screen_1790873364046.jpg';
import androidSplash from '../assets/images/geven_android_splash_1790873350972.jpg';
import androidPos from '../assets/images/geven_android_pos_screen_1790873376850.jpg';

interface ScreenshotItem {
  id: string;
  title: string;
  category: 'Windows Desktop' | 'Android Mobile';
  description: string;
  imageUrl: string;
  aspect: '16:9' | '9:16';
}

const GALLERY_ITEMS: ScreenshotItem[] = [
  {
    id: 'pc-pos',
    title: 'Punto de Venta Rápido (POS)',
    category: 'Windows Desktop',
    description: 'Cobro ágil con lector de códigos de barra, selección táctil de artículos y emisión inmediata de tickets.',
    imageUrl: pcScreenPos,
    aspect: '16:9'
  },
  {
    id: 'pc-inventory',
    title: 'Control de Inventario & Analíticas',
    category: 'Windows Desktop',
    description: 'Gestión de kárdex, stock mínimo, importación masiva de Excel y gráficos de ventas en tiempo real.',
    imageUrl: pcInventory,
    aspect: '16:9'
  },
  {
    id: 'android-pos',
    title: 'Terminal Táctil Móvil',
    category: 'Android Mobile',
    description: 'Ideal para toma de pedidos en mesas, ventas en mostrador y cobro directo desde tablets Android.',
    imageUrl: androidPos,
    aspect: '16:9'
  },
  {
    id: 'android-splash',
    title: 'Pantalla de Inicio (Splash Screen)',
    category: 'Android Mobile',
    description: 'Identidad visual oficial de GEVEN con carga ultrarrápida del motor de base de datos local.',
    imageUrl: androidSplash,
    aspect: '9:16'
  }
];

export const ScreenshotGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState<ScreenshotItem | null>(null);

  const currentItem = GALLERY_ITEMS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="capturas" className="relative py-24 scroll-mt-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Images className="w-3.5 h-3.5" />
            <span>Galería Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Conoce GEVEN
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Explora las pantallas de la aplicación para Windows y Android diseñadas para máxima velocidad.
          </p>
        </div>

        {/* Interactive Gallery Showcase */}
        <div className="max-w-5xl mx-auto">
          
          {/* Main Focused Showcase Card */}
          <div className="glass-panel-elevated rounded-3xl p-4 sm:p-6 border border-emerald-500/30 shadow-2xl relative overflow-hidden mb-6">
            
            {/* Top Bar with Category & Zoom */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {currentItem.category}
                </span>
                <span className="text-sm font-bold text-white font-['Outfit']">
                  {currentItem.title}
                </span>
              </div>

              <button
                onClick={() => setZoomImage(currentItem)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Ampliar captura"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ampliar</span>
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#060a0d] flex items-center justify-center group">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md transition-all shadow-xl hover:scale-110"
                aria-label="Captura anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md transition-all shadow-xl hover:scale-110"
                aria-label="Siguiente captura"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Description Scrim Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-xs text-slate-200">
                {currentItem.description}
              </div>
            </div>

          </div>

          {/* Thumbnail Selector Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-2 rounded-2xl glass-card text-left transition-all overflow-hidden border ${
                  currentIndex === idx
                    ? 'border-emerald-400 ring-2 ring-emerald-400/30 bg-emerald-950/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/40 mb-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] font-bold text-white truncate">{item.title}</div>
                <div className="text-[10px] text-slate-400 truncate">{item.category}</div>
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute -top-12 right-0 p-2 text-white bg-white/10 rounded-full hover:bg-white/20"
              aria-label="Cerrar ampliación"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={zoomImage.imageUrl}
              alt={zoomImage.title}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto rounded-2xl border border-white/20 shadow-2xl object-contain"
            />
            <div className="mt-4 text-center text-sm font-semibold text-white">
              {zoomImage.title} — {zoomImage.category}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
