import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  GitBranch,
  Shield,
  LifeBuoy
} from 'lucide-react';
import { FAQS } from '../data/modulesData';

export const SupportSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    gevenVersion: 'v2.4.0',
    category: 'Actualización y Parches',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.email || !ticketForm.message) return;
    setSubmitted(true);
  };

  return (
    <section id="soporte" className="relative py-24 scroll-mt-12 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute bottom-20 left-1/3 w-[500px] h-[350px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <LifeBuoy className="w-3.5 h-3.5 text-amber-400" />
            <span>Centro de Ayuda & Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Preguntas Frecuentes & Soporte Técnico
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Encuentra respuestas inmediatas sobre el funcionamiento de GEVEN, 
            compatibilidad de periféricos o envía un reporte directo a nuestro equipo de desarrollo.
          </p>
        </div>

        {/* 2-Column Layout: FAQs (Left) and Ticket Form & Official Links (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-['Outfit'] flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <span>Preguntas Frecuentes sobre el Programa</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                    >
                      <span className="font-semibold text-sm text-white">
                        {faq.question}
                      </span>
                      <span className="p-1 rounded-lg bg-white/5 text-slate-400 shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Repository Banner */}
            <div className="mt-8 glass-card rounded-2xl p-5 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 text-emerald-400">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Código Fuente & Versiones en GitHub</div>
                  <div className="text-xs text-slate-400">Repositorio oficial de JulioC9808-ops / Gestion-de-ventas</div>
                </div>
              </div>

              <a
                href="https://github.com/JulioC9808-ops/Gestion-de-ventas"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md shrink-0"
              >
                <span>Ver en GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Support Request Form (5 cols) */}
          <div className="lg:col-span-5 glass-panel-elevated rounded-2xl p-6 sm:p-7 border border-emerald-500/20">
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-5">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit']">Canal Directo de Soporte</h3>
                <p className="text-xs text-slate-400">Respuesta técnica en menos de 24 horas</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Hemos recibido tu consulta sobre GEVEN. Un especialista se pondrá en contacto al correo{' '}
                  <strong className="text-emerald-300 font-mono">{ticketForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setTicketForm({
                      name: '',
                      email: '',
                      gevenVersion: 'v2.4.0',
                      category: 'Actualización y Parches',
                      message: ''
                    });
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-xs font-semibold text-white rounded-xl transition-colors mt-2"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1.5">Nombre Completo:</label>
                  <input
                    type="text"
                    required
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                    placeholder="Ej: Carlos Gómez"
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 focus:border-emerald-400 rounded-xl text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1.5">Correo Electrónico:</label>
                  <input
                    type="email"
                    required
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                    placeholder="carlos@negocio.com"
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 focus:border-emerald-400 rounded-xl text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-300 block mb-1.5">Versión GEVEN:</label>
                    <select
                      value={ticketForm.gevenVersion}
                      onChange={(e) => setTicketForm({ ...ticketForm, gevenVersion: e.target.value })}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 focus:border-emerald-400 rounded-xl text-white focus:outline-none"
                    >
                      <option value="v2.4.0">v2.4.0 (Actual)</option>
                      <option value="v2.3.5">v2.3.5 LTS</option>
                      <option value="v2.3.0">v2.3.0</option>
                      <option value="v2.1.0">v2.1.0 o anterior</option>
                      <option value="nueva">Nueva Instalación</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-300 block mb-1.5">Motivo:</label>
                    <select
                      value={ticketForm.category}
                      onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                      className="w-full px-3 py-2.5 bg-black/50 border border-white/10 focus:border-emerald-400 rounded-xl text-white focus:outline-none"
                    >
                      <option value="Actualización y Parches">Actualización</option>
                      <option value="Impresoras / Hardware">Impresoras / POS</option>
                      <option value="Base de Datos">Base de Datos</option>
                      <option value="Sugerencia de Función">Sugerencia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1.5">Describe tu consulta o problema:</label>
                  <textarea
                    required
                    rows={3}
                    value={ticketForm.message}
                    onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                    placeholder="Explica qué necesitas configurar o qué error experimentas..."
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/10 focus:border-emerald-400 rounded-xl text-white placeholder-slate-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-300 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta al Soporte Oficial</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
