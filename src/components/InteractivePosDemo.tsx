import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Barcode, 
  Trash2, 
  Plus, 
  Minus, 
  Printer, 
  Receipt, 
  CheckCircle, 
  Search, 
  CreditCard, 
  Banknote, 
  QrCode,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import posImg from '../assets/images/geven_feature_pos_1790872573863.jpg';

interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const DEMO_PRODUCTS: Product[] = [
  { id: '1', code: '7501001', name: 'Refresco Cola 600ml', category: 'Bebidas', price: 1.50, stock: 48 },
  { id: '2', code: '7501002', name: 'Aceite Vegetal 1L', category: 'Abarrotes', price: 3.20, stock: 24 },
  { id: '3', code: '7501003', name: 'Arroz Premium Extra 1kg', category: 'Granos', price: 1.85, stock: 95 },
  { id: '4', code: '7501004', name: 'Café Molido Gourmet 250g', category: 'Despensa', price: 4.50, stock: 18 },
  { id: '5', code: '7501005', name: 'Galletas Chocolate Pack x6', category: 'Snacks', price: 2.10, stock: 32 },
  { id: '6', code: '7501006', name: 'Detergente Líquido 1.5L', category: 'Limpieza', price: 5.40, stock: 15 }
];

export const InteractivePosDemo: React.FC = () => {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([
    { product: DEMO_PRODUCTS[0], quantity: 2 },
    { product: DEMO_PRODUCTS[2], quantity: 1 }
  ]);
  const [search, setSearch] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'transfer'>('cash');
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(1042);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setCheckoutComplete(false);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setTicketNumber(prev => prev + 1);
    setCheckoutComplete(true);
  };

  const resetDemo = () => {
    setCart([
      { product: DEMO_PRODUCTS[0], quantity: 1 },
      { product: DEMO_PRODUCTS[3], quantity: 1 }
    ]);
    setCheckoutComplete(false);
  };

  const filteredProducts = DEMO_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.code.includes(search) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="demo-interactiva" className="relative py-24 scroll-mt-12">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[350px] bg-emerald-700/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador Interactivo en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Prueba la Velocidad del Punto de Venta GEVEN
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Experimenta la interfaz fluida, el cálculo de impuestos instantáneo y la emisión de recibos
            diseñados para agilizar tus cobros en caja.
          </p>
        </div>

        {/* POS Simulation Workspace (2 Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Product Catalog & Quick Scanner (7 cols) */}
          <div className="lg:col-span-7 glass-panel-elevated rounded-2xl p-5 sm:p-6 border border-emerald-500/20">
            
            {/* Top Bar of POS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Barcode className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Catálogo & Lector de Barra</div>
                  <div className="text-[11px] text-slate-400">Haz clic en cualquier producto para añadir al carrito</div>
                </div>
              </div>

              {/* Search / Scan simulator */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Escanear o buscar..."
                  className="w-full pl-8 pr-3 py-1.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {filteredProducts.map(product => (
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="p-3 rounded-xl bg-black/40 hover:bg-emerald-950/40 border border-white/5 hover:border-emerald-500/40 text-left transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-mono">{product.code}</span>
                      <span className="text-emerald-400">{product.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                      {product.name}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                    <span className="text-sm font-bold text-emerald-400 font-mono">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Stock: {product.stock}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Hardware Status Indicators */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Lector USB: Conectado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Impresora Térmica 80mm: Lista</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Gaveta RJ11: Operativa</span>
              </div>
            </div>

          </div>

          {/* Right: Checkout Ledger & Ticket Preview (5 cols) */}
          <div className="lg:col-span-5 glass-panel-elevated rounded-2xl p-5 sm:p-6 border border-emerald-500/20 flex flex-col justify-between">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">Ticket #{ticketNumber}</span>
              </div>

              <button
                onClick={clearCart}
                className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                title="Vaciar Carrito"
              >
                <Trash2 className="w-3 h-3" />
                <span>Vaciar</span>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="min-h-[220px] max-h-[260px] overflow-y-auto space-y-2 mb-4 pr-1">
              {cart.length === 0 ? (
                <div className="h-[200px] flex flex-col items-center justify-center text-slate-500 text-xs">
                  <ShoppingCart className="w-8 h-8 mb-2 stroke-[1.5]" />
                  <span>Carrito vacío. Selecciona productos a la izquierda.</span>
                </div>
              ) : (
                cart.map(item => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-black/30 border border-white/5 text-xs"
                  >
                    <div className="flex-1 min-w-0 mr-2">
                      <div className="font-semibold text-white truncate">{item.product.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        ${item.product.price.toFixed(2)} c/u
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1 bg-black/50 rounded-lg border border-white/10 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 text-slate-300 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center font-mono font-bold text-white text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 text-slate-300 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="w-14 text-right font-bold text-emerald-400 font-mono">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Calculations & Totals */}
            <div className="bg-black/40 rounded-xl p-3.5 border border-white/5 space-y-1.5 mb-4 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal:</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>IVA (16%):</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-1.5 border-t border-white/10">
                <span className="text-white font-sans">TOTAL A COBRAR:</span>
                <span className="text-emerald-400 text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  paymentMethod === 'cash'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50'
                    : 'bg-black/30 text-slate-400 border border-white/5 hover:text-white'
                }`}
              >
                <Banknote className="w-3.5 h-3.5" />
                <span>Efectivo</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50'
                    : 'bg-black/30 text-slate-400 border border-white/5 hover:text-white'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Tarjeta</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('transfer')}
                className={`py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  paymentMethod === 'transfer'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50'
                    : 'bg-black/30 text-slate-400 border border-white/5 hover:text-white'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Transfer</span>
              </button>
            </div>

            {/* Checkout Action Button */}
            {checkoutComplete ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>¡Venta Procesada e Impresa en 0.8s!</span>
                </div>
                <button
                  onClick={resetDemo}
                  className="text-xs text-slate-300 hover:text-white underline flex items-center justify-center gap-1 mx-auto"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Iniciar Nueva Venta de Prueba</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-3 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 hover:from-emerald-300 hover:to-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>Cobrar ${total.toFixed(2)} & Imprimir Ticket</span>
              </button>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
