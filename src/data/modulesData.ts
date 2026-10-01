import { SystemModule } from '../types';

export const SYSTEM_MODULES: SystemModule[] = [
  {
    id: 'pos',
    title: 'Punto de Venta Ultra Rápido',
    subtitle: 'Terminal de Cobro Ágil & Multimoneda',
    description: 'Diseñado para eliminar filas en caja. Soporte nativo para lector de código de barras, búsqueda predictiva por texto, pago combinado (Efectivo, Tarjeta, Transferencia, Crédito) y apertura automática de cajón.',
    iconName: 'ShoppingCart',
    accentColor: 'emerald',
    badge: 'Módulo Principal',
    features: [
      'Cobro con múltiples divisas y tasa de cambio en vivo',
      'Atajos rápidos de teclado para facturar sin ratón',
      'Retención de tickets en espera mientras se atiende a otro cliente',
      'Descuentos porcentuales o por monto con clave de supervisor'
    ],
    metrics: [
      { label: 'Tiempo medio de cobro', value: '< 4 seg' },
      { label: 'Compatibilidad periféricos', value: '100% ESC/POS' }
    ]
  },
  {
    id: 'inventory',
    title: 'Control de Inventario & Stock',
    subtitle: 'Kárdex Inteligente & Alertas en Tiempo Real',
    description: 'Monitorea cada producto con precisión milimétrica. Administra stock mínimo, alertas de reposición, categorías anidadas, códigos de barra primarios y secundarios, e inventarios cíclicos.',
    iconName: 'PackageCheck',
    accentColor: 'emerald',
    badge: 'Gestión Inteligente',
    features: [
      'Kárdex automático de entradas, salidas y ajustes manuales',
      'Importación masiva desde archivos Excel o CSV en segundos',
      'Control de lotes y fechas de caducidad para perecederos',
      'Alerta visual automática de productos próximos a agotarse'
    ],
    metrics: [
      { label: 'Capacidad de catálogo', value: '+100k ítems' },
      { label: 'Tiempo de importación 5k', value: '1.2s' }
    ]
  },
  {
    id: 'cash-register',
    title: 'Arqueo de Caja & Control de Turnos',
    subtitle: 'Cierre Z/X & Prevención de Descuadres',
    description: 'Auditoría estricta de todo el flujo de efectivo. Apertura de caja con fondo inicial, registro de gastos imprevistos, retiros parciales de efectivo y cierre ciego para evitar fraudes.',
    iconName: 'Coins',
    accentColor: 'amber',
    badge: 'Seguridad Financiera',
    features: [
      'Cierre Z detallado con desglose por cada método de cobro',
      'Diferenciación exacta entre ventas, abonos y propinas',
      'Historial de auditoría inmutable de todas las aperturas/cierres',
      'Impresión automática del resumen de caja en ticketera'
    ],
    metrics: [
      { label: 'Precisión de balance', value: '99.99%' },
      { label: 'Auditoría', value: '100% Trazable' }
    ]
  },
  {
    id: 'clients-credit',
    title: 'Clientes, Créditos & CxC',
    subtitle: 'Fidelización y Cuentas por Cobrar',
    description: 'Centraliza la base de datos de clientes con historial de compras, límites de crédito comercial, abonos parciales y estados de cuenta exportables para enviar por WhatsApp o correo.',
    iconName: 'UsersRound',
    accentColor: 'emerald',
    badge: 'Fidelización',
    features: [
      'Límite de crédito configurable por cliente con bloqueo automático',
      'Registro de abonos con recibo detallado de saldo pendiente',
      'Listas de precios preferenciales para clientes VIP o mayoristas',
      'Historial completo de compras por cliente'
    ],
    metrics: [
      { label: 'Control CxC', value: 'Tiempo Real' },
      { label: 'Recibos digitales', value: 'PDF / Ticket' }
    ]
  },
  {
    id: 'reports-bi',
    title: 'Reportes & Analíticas de Negocio',
    subtitle: 'Márgenes de Utilidad & Gráficos Ejecutivos',
    description: 'Toma decisiones con datos reales. Visualiza ventas por día/mes, productos más rentables, horas pico de afluencia, márgenes brutos y comisiones de vendedores con exportación a Excel.',
    iconName: 'BarChart3',
    accentColor: 'emerald',
    badge: 'Decisiones Clave',
    features: [
      'Gráficos interactivos de evolución de ingresos y ganancias netas',
      'Top 20 productos de mayor rotación y margen de beneficio',
      'Filtros personalizados por cajero, fecha, categoría o sucursal',
      'Exportación en 1-click a Excel, PDF y CSV'
    ],
    metrics: [
      { label: 'Reportes predefinidos', value: '+35 plantillas' },
      { label: 'Exportación', value: 'Excel / PDF' }
    ]
  },
  {
    id: 'security-roles',
    title: 'Roles, Permisos & Respaldo',
    subtitle: 'Protección de Datos & Respaldos 1-Click',
    description: 'Establece permisos granulares para Administrador, Cajero y Supervisor. Incluye sistema de respaldo automático de base de datos a USB o carpeta local cifrada.',
    iconName: 'ShieldCheck',
    accentColor: 'emerald',
    badge: 'Máxima Protección',
    features: [
      'Permisos por módulo: prohibir ver costos, modificar precios o anular',
      'Respaldo atómico de base de datos sin necesidad de cerrar el sistema',
      'Registro de logs de actividad (quién vendió, modificó o anuló)',
      '100% offline: la información se queda en tu propio computador'
    ],
    metrics: [
      { label: 'Privacidad de datos', value: '100% Local' },
      { label: 'Tiempo de Backup', value: '< 2 seg' }
    ]
  }
];

export const FAQS = [
  {
    question: '¿Cómo actualizo GEVEN sin perder mis datos, clientes ni ventas?',
    answer: 'La actualización de GEVEN está diseñada para conservar íntegramente tu base de datos. Simplemente descarga el instalador de la nueva versión (o el parche de actualización) y ejecútalo en el mismo equipo. El asistente detectará tu base de datos existente y aplicará automáticamente las mejoras estructurales sin alterar tus registros. Siempre recomendamos realizar un respaldo previo desde el menú "Ajustes > Respaldar Base de Datos".'
  },
  {
    question: '¿GEVEN funciona sin conexión a internet?',
    answer: 'Sí, absolutamente. GEVEN es un sistema de escritorio nativo de alto rendimiento que opera 100% fuera de línea (offline). Tus datos se almacenan localmente en tu propio equipo o servidor local, garantizando rapidez inmediata y operatividad continua incluso si no hay conexión a internet.'
  },
  {
    question: '¿Qué tipo de impresoras y lectores de códigos son compatibles?',
    answer: 'GEVEN es compatible con el estándar universal ESC/POS. Funciona perfectamente con cualquier impresora térmica de tickets (58mm, 80mm, USB, Red Ethernet, Bluetooth o Puerto Serie) y con cualquier pistola o lector de códigos de barra estándar (1D y 2D / QR) plug-and-play.'
  },
  {
    question: '¿Puedo usar GEVEN en múltiples computadoras en red local?',
    answer: 'Sí. Puedes configurar una computadora principal como Servidor de Datos y conectar las terminales de caja adicionales a través de tu red local Wi-Fi o cable Ethernet para compartir el inventario y las ventas en tiempo real.'
  },
  {
    question: '¿Dónde puedo reportar sugerencias o solicitar soporte técnico?',
    answer: 'Puedes canalizar consultas directamente en el repositorio oficial de GitHub del proyecto o a través del formulario de soporte técnico disponible en este portal oficial.'
  }
];
