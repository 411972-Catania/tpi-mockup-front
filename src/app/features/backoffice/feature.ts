import { FeatureDefinition } from '../../core/models/feature.model';
export const BACKOFFICE_FEATURE: FeatureDefinition = {
  id:'backoffice',order:12,slug:'backoffice',shortName:'Backoffice',name:'Backoffice',tagline:'Gobierno operativo, configuración y lectura transversal de la plataforma.',color:'#293241',tint:'#e9edf2',icon:'grid',primaryPhase:'MVP',
  responsibilities:['Administración de plataforma','Proveedor de modelo exclusivo de admin','Reportes docentes','Exportación de datos','Métricas de curso'],
  dependencies:[{target:'identidad',reason:'Protege acciones administrativas y auditoría.',contract:'admin / auditoría'},{target:'evaluacion-llm',reason:'Administra proveedores y ve salud del evaluador.',contract:'proveedor / calibración'},{target:'cursos',reason:'Consolida operación y métricas por curso.',contract:'curso / cohorte'}],
  screens:[
    {id:'inicio',title:'Centro de control',description:'Salud, alertas y trabajo pendiente.',roles:['admin'],phase:'MVP',mock:'metrics',rf:['RF-CFG-01']},
    {id:'configuracion',title:'Configuración global',description:'Economía, seguridad, idioma y retención.',roles:['admin'],phase:'MVP',mock:'builder',rf:['RF-CFG-01','RF-CFG-04']},
    {id:'administradores',title:'Administradores',description:'Altas, bajas reforzadas y regla de último admin.',roles:['admin'],phase:'MVP',mock:'table',rf:['RF-ROL-02','RF-ROL-06']},
    {id:'proveedores',title:'Proveedores de IA',description:'Credenciales, modelos y asignación por función.',roles:['admin'],phase:'MVP',mock:'table',rf:['RF-IA-11','RF-IA-35']},
    {id:'reportes',title:'Reportes docentes',description:'Resultados académicos, satisfacción y actividad.',roles:['profesor','admin'],phase:'MVP',mock:'metrics',rf:['RF-RNK-13','RF-ENC-08']},
    {id:'exportaciones',title:'Exportaciones y retención',description:'Solicitudes, alcance, vencimiento y trazabilidad.',roles:['admin'],phase:'Fase 2',mock:'table',rf:['RF-NFR-10']},
    {id:'metricas',title:'Métricas de curso',description:'KPIs académicos, engagement y comparación temporal.',roles:['profesor','admin'],phase:'MVP',mock:'metrics',rf:['KPI-01','KPI-07']}
  ]
};
