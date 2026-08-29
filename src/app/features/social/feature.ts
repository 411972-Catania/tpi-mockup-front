import { FeatureDefinition } from '../../core/models/feature.model';
export const SOCIAL_FEATURE: FeatureDefinition = {
  id:'social',order:11,slug:'social',shortName:'Social',name:'Social y Notificaciones',tagline:'Conversaciones útiles, alertas oportunas y convivencia moderada.',color:'#0093c4',tint:'#e1f7ff',icon:'chat',primaryPhase:'Fase 2',
  responsibilities:['Chat y retención diferenciada','Equipos','Notificaciones','Reportes de contenido','Mensajería asíncrona'],
  dependencies:[{target:'identidad',reason:'Aplica visibilidad, actores y destinatarios.',contract:'usuario / rol'},{target:'cursos',reason:'Delimita canales, equipos y ciclo de retención.',contract:'curso / membresía'},{target:'evaluacion-llm',reason:'Usa moderador y conserva menciones pedagógicas.',contract:'moderación / interacción IA'}],
  screens:[
    {id:'chat',title:'Chat del curso',description:'Canales, hilos, citas y mención a agentes.',roles:['alumno','profesor','admin'],phase:'Fase 2',mock:'chat',rf:['RF-CHT-01','RF-CHT-06']},
    {id:'equipos',title:'Equipos',description:'Integrantes, canal y actividad compartida.',roles:['alumno','profesor'],phase:'Fase 2',mock:'progress',rf:['EXT-EQP-01']},
    {id:'notificaciones',title:'Centro de notificaciones',description:'Eventos in-app, leído y acceso contextual.',roles:['alumno','profesor','admin'],phase:'MVP',mock:'chat',rf:['RF-NOT-01','RF-NOT-05']},
    {id:'templates',title:'Plantillas y triggers',description:'Mensajes por tipo de evento y lanzamiento.',roles:['profesor','admin'],phase:'MVP',mock:'builder',rf:['RF-NOT-03','RF-NOT-04']},
    {id:'reportar',title:'Reportar contenido',description:'Motivo, contexto retenido y seguimiento.',roles:['alumno','profesor'],phase:'Fase 2',mock:'chat',rf:['RF-CHT-14']},
    {id:'moderacion',title:'Incidentes de moderación',description:'Severidad, evidencia, acción y apelación.',roles:['profesor','admin'],phase:'Fase 2',mock:'table',rf:['RF-CHT-11','RF-CHT-13']},
    {id:'eventos',title:'Monitor de eventos',description:'Colas, fallos y reintentos de mensajería.',roles:['admin'],phase:'MVP',mock:'runtime',rf:['RF-NFR-04']}
  ]
};
