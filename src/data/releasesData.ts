import { Release } from '../types';

export const RELEASES_DATA: Release[] = [
  {
    version: 'v2.4.0',
    tag: 'v2.4.0-stable',
    releaseDate: '28 de Septiembre, 2026',
    isLatest: true,
    type: 'stable',
    title: 'GEVEN v2.4.0 — Motor de Facturación Rápida & Auditoría de Caja Z/X',
    summary: 'Actualización mayor con mejoras drásticas en la velocidad de cobro en punto de venta, soporte para balanzas electrónicas, nuevo informe de margen por categoría y sincronización optimizada de stock.',
    highlights: [
      'Aceleración de búsqueda de códigos de barra a < 15ms en catálogos de +50,000 ítems',
      'Módulo renovado de Arqueo y Cierre Z con desglose por método de pago y comisiones',
      'Exportación automática de facturas a PDF y formato térmico de 58mm y 80mm',
      'Migración de motor de base de datos con respaldo atómico en 1-click'
    ],
    changelog: [
      {
        category: 'feature',
        title: 'Integración de Balanzas Digitales Serial / USB',
        description: 'Lectura directa de peso en tiempo real para venta fraccionada de productos a granel.'
      },
      {
        category: 'feature',
        title: 'Módulo de Crédito y Cuentas por Cobrar (CxC)',
        description: 'Gestión de límites de crédito por cliente, abonos parciales y recordatorios de vencimiento.'
      },
      {
        category: 'improvement',
        title: 'Optimización de Consultas SQL de Inventario',
        description: 'Reducción del 65% en el uso de memoria RAM durante la carga de reportes históricos de ventas.'
      },
      {
        category: 'improvement',
        title: 'Diseño de Tickets Personalizable',
        description: 'Editor visual para añadir logotipo, código QR fiscal, mensajes de agradecimiento y políticas de devolución.'
      },
      {
        category: 'fix',
        title: 'Corrección en redondeo de impuestos compuestos',
        description: 'Resuelto bug que generaba discrepancia de $0.01 en ventas con múltiples tasas impositivas.'
      },
      {
        category: 'security',
        title: 'Cifrado SHA-512 para contraseñas de operadores',
        description: 'Actualización en el almacenamiento de credenciales locales y registro de sesiones activas.'
      }
    ],
    assets: [
      {
        name: 'GEVEN-Setup-v2.4.0-x64.exe',
        type: 'installer',
        size: '48.6 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.4.0/GEVEN-Setup-v2.4.0-x64.exe',
        sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        compatibility: 'Windows 10 / 11 (64-bit)'
      },
      {
        name: 'GEVEN-Portable-v2.4.0.zip',
        type: 'portable',
        size: '52.1 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.4.0/GEVEN-Portable-v2.4.0.zip',
        sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
        compatibility: 'Windows 7 / 8.1 / 10 / 11 (No requiere instalación)'
      },
      {
        name: 'GEVEN-UpdatePatch-v2.3.x-to-v2.4.0.exe',
        type: 'patch',
        size: '14.2 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.4.0/GEVEN-Patch-v2.4.0.exe',
        sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
        compatibility: 'Para usuarios que actualizan desde v2.3.0 o v2.3.5'
      }
    ],
    databaseMigrationRequired: false,
    minSupportedPreviousVersion: 'v2.0.0'
  },
  {
    version: 'v2.3.5',
    tag: 'v2.3.5-lts',
    releaseDate: '15 de Agosto, 2026',
    isLatest: false,
    type: 'lts',
    title: 'GEVEN v2.3.5 LTS — Soporte a Largo Plazo & Estabilidad Empresarial',
    summary: 'Versión LTS recomendada para despliegues comerciales de alta concurrencia. Enfocada en máxima tolerancia a fallos de red y preservación de transacciones ante cortes eléctricos.',
    highlights: [
      'Modo Offline Robusto: Las ventas continúan registrándose localmente sin interrupción',
      'Motor de recuperación automática de base de datos tras cierre inesperado',
      'Soporte extendido de parches de seguridad garantizado por 2 años'
    ],
    changelog: [
      {
        category: 'improvement',
        title: 'Buffer de impresión asíncrono',
        description: 'Las órdenes se envían a la cola de impresión térmica sin bloquear la interfaz del cajero.'
      },
      {
        category: 'fix',
        title: 'Corrección de cálculo de stock en combos/packs',
        description: 'Descontado correcto de materias primas cuando se vende un paquete compuesto.'
      },
      {
        category: 'security',
        title: 'Refuerzo de permisos de anulación',
        description: 'Requerimiento de clave de supervisor para anulaciones de tickets ya emitidos.'
      }
    ],
    assets: [
      {
        name: 'GEVEN-Setup-v2.3.5-LTS-x64.exe',
        type: 'installer',
        size: '46.8 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.3.5/GEVEN-Setup-v2.3.5-LTS-x64.exe',
        sha256: 'd41d8cd98f00b204e9800998ecf8427e56214ef5e998ff13a11b6432349008f1',
        compatibility: 'Windows 10 / 11 (64-bit)'
      },
      {
        name: 'GEVEN-Portable-v2.3.5-LTS.zip',
        type: 'portable',
        size: '49.9 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.3.5/GEVEN-Portable-v2.3.5-LTS.zip',
        sha256: '7b52009b64fd0a2a49e6d8a939753077792b0554dad51dde07410585fb777422',
        compatibility: 'Windows 7 / 8.1 / 10 / 11'
      }
    ],
    databaseMigrationRequired: false,
    minSupportedPreviousVersion: 'v2.0.0'
  },
  {
    version: 'v2.3.0',
    tag: 'v2.3.0-stable',
    releaseDate: '2 de Junio, 2026',
    isLatest: false,
    type: 'stable',
    title: 'GEVEN v2.3.0 — Nuevo Gestor de Proveedores & Importación Masiva Excel',
    summary: 'Introducción del módulo avanzado de compras a proveedores, control de costos promedio ponderados y carga masiva de productos por archivo CSV / Excel.',
    highlights: [
      'Importador inteligente de inventario con mapeo automático de columnas',
      'Generación de órdenes de compra con cálculo de reposición sugerida',
      'Soporte para múltiples listas de precios (Mayorista, Detal, Especial)'
    ],
    changelog: [
      {
        category: 'feature',
        title: 'Asistente de Importación Excel/CSV',
        description: 'Carga o actualización de miles de artículos con validación de errores previa.'
      },
      {
        category: 'feature',
        title: 'Módulo de Compras y Cuentas por Pagar (CxP)',
        description: 'Seguimiento de facturas de proveedores, fechas de pago y costos de adquisición.'
      },
      {
        category: 'improvement',
        title: 'Atajos de Teclado en POS',
        description: 'Acceso a todas las funciones clave (F1 a F12) sin requerir el mouse.'
      }
    ],
    assets: [
      {
        name: 'GEVEN-Setup-v2.3.0-x64.exe',
        type: 'installer',
        size: '45.3 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.3.0/GEVEN-Setup-v2.3.0-x64.exe',
        sha256: '4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945',
        compatibility: 'Windows 10 / 11 (64-bit)'
      }
    ],
    databaseMigrationRequired: true,
    minSupportedPreviousVersion: 'v1.9.0'
  },
  {
    version: 'v2.5.0-RC1',
    tag: 'v2.5.0-beta',
    releaseDate: 'Pre-lanzamiento (Octubre 2026)',
    isLatest: false,
    type: 'beta',
    title: 'GEVEN v2.5.0 Release Candidate — Facturación Multisede & Dashboard Móvil',
    summary: 'Versión previa para pruebas. Incluye sincronización en tiempo real entre múltiples sucursales y panel de control web responsivo para consulta remota de dueños de negocio.',
    highlights: [
      'Sincronización híbrida P2P y Cloud entre sucursales',
      'API REST integrada para consulta de stock desde terminales móviles',
      'Nuevo motor de analíticas predictivas de rotación de stock'
    ],
    changelog: [
      {
        category: 'feature',
        title: 'Conector Multitienda (Multi-Branch)',
        description: 'Transferencias de mercancía entre tiendas y consolidación de ventas globales.'
      },
      {
        category: 'feature',
        title: 'Servidor Web Local para Reportes',
        description: 'Consulta de métricas desde smartphone o tablet en la misma red Wi-Fi.'
      }
    ],
    assets: [
      {
        name: 'GEVEN-v2.5.0-RC1-Testing.zip',
        type: 'portable',
        size: '56.4 MB',
        downloadUrl: 'https://github.com/JulioC9808-ops/Gestion-de-ventas/releases/download/v2.5.0-RC1/GEVEN-v2.5.0-RC1-Testing.zip',
        sha256: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0',
        compatibility: 'Entorno de pruebas y pruebas piloto (No usar en producción directa sin respaldo previo)'
      }
    ],
    databaseMigrationRequired: true,
    minSupportedPreviousVersion: 'v2.4.0'
  }
];

export const SYSTEM_REQUIREMENTS = [
  {
    component: 'Sistema Operativo',
    minimum: 'Windows 7 SP1 / 8.1 / 10 (64-bit o 32-bit)',
    recommended: 'Windows 10 / 11 (64-bit Pro / Enterprise)',
    notes: 'Totalmente compatible con terminales táctiles (All-In-One POS).'
  },
  {
    component: 'Procesador (CPU)',
    minimum: 'Intel Celeron / AMD Dual Core 2.0 GHz',
    recommended: 'Intel Core i3 / AMD Ryzen 3 o superior',
    notes: 'Bajo consumo de recursos, optimizado para equipos de caja estándar.'
  },
  {
    component: 'Memoria RAM',
    minimum: '2 GB de RAM',
    recommended: '4 GB o 8 GB de RAM',
    notes: 'Para bases de datos con más de 100,000 registros de ventas se sugieren 4GB+.'
  },
  {
    component: 'Almacenamiento (Disco)',
    minimum: '500 MB libres para instalación',
    recommended: 'Disco de estado sólido (SSD) con 5 GB+ disponibles',
    notes: 'El SSD acelera la búsqueda instantánea y la generación de respaldos diarios.'
  },
  {
    component: 'Impresoras y Periféricos',
    minimum: 'Impresora térmica de tickets (ESC/POS) USB/Serial o Genérica',
    recommended: 'Impresora térmica 80mm con cortador automático + Gaveta de dinero RJ11',
    notes: 'Compatible con el 99.8% de lectores de códigos de barra y pistolas láser USB.'
  },
  {
    component: 'Conexión a Internet',
    minimum: 'No requerida para operar (100% Funcional Offline)',
    recommended: 'Banda ancha para descargar actualizaciones y copias de seguridad en la nube',
    notes: 'Tu negocio nunca se detiene si se cae internet.'
  }
];
