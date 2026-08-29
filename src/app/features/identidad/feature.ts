import { FeatureDefinition } from '../../core/models/feature.model';

export const IDENTIDAD_FEATURE: FeatureDefinition = {
  id: 'identidad', order: 1, slug: 'identidad', shortName: 'Identidad', name: 'Identidad y Usuarios',
  tagline: 'La puerta de entrada, los permisos y la trazabilidad de toda la plataforma.',
  color: '#7559ff', tint: '#eeeaff', icon: 'user', primaryPhase: 'MVP',
  responsibilities: ['Registro y autenticación', 'Roles y permisos', 'Perfil de usuario', 'Auditoría', 'Borrado lógico y retención', 'API gateway'],
  dependencies: [],
  screens: [
    { id: 'login', title: 'Ingreso seguro', description: 'Usuario, contraseña, 2FA y recuperación.', roles: ['alumno','profesor','admin'], phase: 'MVP', mock: 'access', rf: ['RF-NFR-02'] },
    { id: 'registro-alumno', title: 'Registro de alumno', description: 'Datos personales, código de invitación y validación de legajo.', roles: ['alumno'], phase: 'MVP', mock: 'registration', rf: ['RF-USR-03','RF-USR-05g0'] },
    { id: 'registro-profesor', title: 'Registro de profesor', description: 'Datos personales, whitelist y activación por email.', roles: ['profesor'], phase: 'MVP', mock: 'registration', rf: ['RF-USR-02','RF-USR-04'] },
    { id: 'onboarding', title: 'Activación y onboarding', description: 'Verificación, integración académica y Guided Tour.', roles: ['alumno','profesor'], phase: 'MVP', mock: 'onboarding', rf: ['RF-USR-06','RF-TUR-01'] },
    { id: 'perfil', title: 'Mi perfil', description: 'Datos personales, datos institucionales y preferencias por rol.', roles: ['alumno','profesor','admin'], phase: 'MVP', mock: 'profile', rf: ['RF-CFG-03','RF-REC-02'] },
    { id: 'usuarios', title: 'Gestión de usuarios', description: 'Estados, roles, baja lógica y retención.', roles: ['admin'], phase: 'MVP', mock: 'table', rf: ['RF-ROL-01','RF-NFR-01'] },
    { id: 'pendientes', title: 'Solicitudes pendientes', description: 'Validación por padrón o excepción auditada.', roles: ['profesor'], phase: 'MVP', mock: 'table', rf: ['RF-USR-05g','RF-USR-05h'] },
    { id: 'auditoria', title: 'Auditoría de acceso', description: 'Trazas de cambios sensibles y acciones administrativas.', roles: ['admin'], phase: 'MVP', mock: 'table', rf: ['RF-ROL-06'] }
  ]
};
