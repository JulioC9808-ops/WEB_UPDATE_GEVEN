export type Platform = 'windows' | 'android';

export interface ChangelogEntry {
  type: 'feature' | 'improvement' | 'fix' | 'security';
  title: string;
  description: string;
}

export interface ReleaseItem {
  id: string;
  version: string;
  platform: Platform;
  releaseDate: string;
  isLatest: boolean;
  title: string;
  summary: string;
  description: string;
  downloadUrl: string;
  fileName: string;
  fileSize: string;
  sha256?: string;
  requirements: string;
  highlights: string[];
  changelog: ChangelogEntry[];
  screenshots?: {
    title: string;
    url: string;
  }[];
}

// Separated Data Layer ready for future GitHub API hookup:
// In the future, this can be fetched from https://api.github.com/repos/JulioC9808-ops/Sistema-Updates/releases
export const releasesData: ReleaseItem[] = [
  {
    id: 'v1.2.0-win',
    version: 'v1.2.0',
    platform: 'windows',
    releaseDate: '01 Octubre 2026',
    isLatest: true,
    title: 'GEVEN v1.2.0 para Windows — Nueva interfaz rápida & Cierre de Caja Z',
    summary: 'Actualización mayor con mejoras drásticas en la velocidad de cobro, soporte de tickets térmicos y nuevo arqueo de caja con desglose multidivisa.',
    description: 'GEVEN v1.2.0 para Windows introduce una arquitectura optimizada para puntos de venta comerciales, aceleración de búsqueda de productos con lector de códigos de barra a menos de 15ms y nuevo módulo de impresión térmica.',
    downloadUrl: 'https://github.com/JulioC9808-ops/Sistema-Updates/releases/download/v1.2.0/GEVEN-Setup-1.2.0.exe',
    fileName: 'GEVEN-Setup-1.2.0.exe',
    fileSize: '48.6 MB',
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    requirements: 'Windows 7 SP1 / 8.1 / 10 / 11 (32 & 64-bit)',
    highlights: [
      'Nuevas funciones de venta rápida y atajos de teclado',
      'Mejoras notables en el rendimiento del motor de base de datos local',
      'Correcciones de redondeo en tickets con múltiples impuestos',
      'Nuevo visor de arqueo diario Z/X con registro de entradas y salidas'
    ],
    changelog: [
      {
        type: 'feature',
        title: 'Módulo de Arqueo y Cierre de Caja Z/X',
        description: 'Auditoría detallada por turno con desglose de efectivo, tarjetas, transferencias y retiros.'
      },
      {
        type: 'feature',
        title: 'Compatibilidad con Balanzas e Impresoras Térmicas ESC/POS',
        description: 'Soporte plug-and-play para tickets de 58mm y 80mm con cortador automático.'
      },
      {
        type: 'improvement',
        title: 'Búsqueda instantánea de inventario',
        description: 'Tiempos de respuesta reducidos a < 15ms en catálogos de más de 50,000 productos.'
      },
      {
        type: 'fix',
        title: 'Corrección de cálculo en abonos a crédito',
        description: 'Solucionado el cálculo de saldo pendiente en cuentas por cobrar de clientes.'
      },
      {
        type: 'security',
        title: 'Cifrado de contraseñas de supervisores',
        description: 'Refuerzo de seguridad para autorizar anulaciones y modificaciones de precios.'
      }
    ]
  },
  {
    id: 'v1.3-android',
    version: 'v1.3',
    platform: 'android',
    releaseDate: '01 Octubre 2026',
    isLatest: true,
    title: 'GEVEN v1.3 para Android — Cobro Móvil & Catálogo Táctil',
    summary: 'Versión móvil optimizada para tablets y smartphones Android. Permite realizar ventas en el mostrador o pedidos en mesa con sincronización local.',
    description: 'GEVEN para Android v1.3 está diseñado para máxima agilidad en dispositivos móviles. Incluye soporte para lectores de códigos de barra mediante la cámara del móvil o escáner Bluetooth.',
    downloadUrl: 'https://github.com/JulioC9808-ops/Sistema-Updates/releases/download/android/GEVEN-Android.apk',
    fileName: 'GEVEN-Android.apk',
    fileSize: '18.4 MB',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    requirements: 'Android 7.0 (Nougat) o superior',
    highlights: [
      'Interfaz táctil moderna adaptada a teléfonos y tablets',
      'Escaneo de códigos de barra con la cámara del dispositivo',
      'Exportación de reportes de venta en formato PDF y WhatsApp',
      'Inicio de sesión rápido y control de pedidos'
    ],
    changelog: [
      {
        type: 'feature',
        title: 'Lector de Códigos por Cámara Integrada',
        description: 'Reconocimiento instantáneo de códigos EAN-13, UPC y QR mediante la cámara.'
      },
      {
        type: 'feature',
        title: 'Generador de Comprobantes para WhatsApp',
        description: 'Envía el ticket de venta en PDF directamente al cliente tras confirmar el pago.'
      },
      {
        type: 'improvement',
        title: 'Optimización de consumo de batería',
        description: 'Reducción del 40% en uso de CPU y gestión eficiente de pantalla en modo reposo.'
      },
      {
        type: 'fix',
        title: 'Ajuste de teclado numérico en pantallas pequeñas',
        description: 'Evita que el teclado virtual tape el botón de cobro en terminales de 5.5 pulgadas.'
      }
    ]
  },
  {
    id: 'v1.1.41-win',
    version: 'v1.1.41',
    platform: 'windows',
    releaseDate: '14 Septiembre 2026',
    isLatest: false,
    title: 'GEVEN v1.1.41 para Windows — Parche de Estabilidad & Clientes',
    summary: 'Actualización enfocada en la gestión de cuentas por cobrar, importación de inventario desde Excel y correcciones de estabilidad.',
    description: 'Versión de mantenimiento para usuarios de Windows con mejoras en el asistente de importación masiva de productos.',
    downloadUrl: 'https://github.com/JulioC9808-ops/Sistema-Updates/releases/download/v1.1.41/GEVEN-Setup-1.1.41.exe',
    fileName: 'GEVEN-Setup-1.1.41.exe',
    fileSize: '47.2 MB',
    sha256: 'd41d8cd98f00b204e9800998ecf8427e56214ef5e998ff13a11b6432349008f1',
    requirements: 'Windows 7 / 8.1 / 10 / 11',
    highlights: [
      'Importador de archivos Excel (.xlsx / .csv) para carga rápida de artículos',
      'Historial de compras por cliente con alertas de límite de crédito'
    ],
    changelog: [
      {
        type: 'feature',
        title: 'Importador Excel Asistido',
        description: 'Mapeo flexible de columnas para importar productos con precios y stock.'
      },
      {
        type: 'fix',
        title: 'Corrección en reconexión de impresora térmica USB',
        description: 'Detecta automáticamente la impresora si se desconecta durante una venta.'
      }
    ]
  },
  {
    id: 'v1.1.0-win',
    version: 'v1.1.0',
    platform: 'windows',
    releaseDate: '20 Agosto 2026',
    isLatest: false,
    title: 'GEVEN v1.1.0 para Windows — Módulo de Inventario & Proveedores',
    summary: 'Primera versión con control de stock mínimo, órdenes de compra y multi-categorías de productos.',
    description: 'Lanzamiento enfocado en el control de almacén y registro de proveedores.',
    downloadUrl: 'https://github.com/JulioC9808-ops/Sistema-Updates/releases/download/v1.1.0/GEVEN-Setup-1.1.0.exe',
    fileName: 'GEVEN-Setup-1.1.0.exe',
    fileSize: '45.0 MB',
    sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    requirements: 'Windows 7 / 8.1 / 10 / 11',
    highlights: [
      'Kárdex de movimientos de inventario',
      'Gestión de proveedores y compras'
    ],
    changelog: [
      {
        type: 'feature',
        title: 'Kárdex de Inventario',
        description: 'Registro de entradas, salidas y ajustes manuales de stock.'
      }
    ]
  }
];

// Helper to get latest releases
export const latestWindowsRelease = releasesData.find(r => r.platform === 'windows' && r.isLatest) || releasesData[0];
export const latestAndroidRelease = releasesData.find(r => r.platform === 'android' && r.isLatest) || releasesData[1];
