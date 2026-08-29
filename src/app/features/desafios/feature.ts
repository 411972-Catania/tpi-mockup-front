import { FeatureDefinition } from '../../core/models/feature.model';
export const DESAFIOS_FEATURE: FeatureDefinition = {
  id:'desafios',order:3,slug:'desafios',shortName:'Desafíos',name:'Motor de Desafíos',tagline:'El ciclo de vida común de cada actividad, de borrador a devolución.',color:'#f35b5b',tint:'#ffebeb',icon:'flag',primaryPhase:'MVP',
  responsibilities:['Ciclo de vida del desafío','Publicación y asignación','Entregas y estados','Versionado','Colaboración en desafíos'],
  dependencies:[
    {target:'cursos',reason:'Todo desafío se publica dentro de un curso.',contract:'curso / comisión'},
    {target:'identidad',reason:'Autoría, permisos y destinatarios.',contract:'usuario / rol'},
    {target:'banco',reason:'Acredita recompensas al aprobar.',contract:'regla de acreditación'}
  ],
  screens:[
    {id:'biblioteca',title:'Biblioteca de desafíos',description:'Filtros, estados, dificultad y reutilización.',roles:['profesor','admin'],phase:'MVP',mock:'table',rf:['RF-DES-01','RF-DES-02']},
    {id:'crear',title:'Datos del desafío',description:'Consigna, dificultad, obligatoriedad y reintentos.',roles:['profesor'],phase:'MVP',mock:'builder',rf:['RF-DES-03','RF-DES-07']},
    {id:'publicar',title:'Publicar y asignar',description:'Curso, sección, comisión y mensaje de lanzamiento.',roles:['profesor'],phase:'MVP',mock:'course',rf:['RF-NOT-04']},
    {id:'entregas',title:'Bandeja de entregas',description:'Estados, intentos y correcciones pendientes.',roles:['profesor'],phase:'MVP',mock:'table',rf:['RF-DES-07']},
    {id:'historial',title:'Historial de versiones',description:'Cambios de consigna y versión resuelta por cada alumno.',roles:['profesor','admin'],phase:'MVP',mock:'table',rf:['RF-CUR-05']},
    {id:'colaboracion',title:'Desafío colaborativo',description:'Equipos, roles y contribuciones.',roles:['alumno','profesor'],phase:'Fase 2',mock:'progress',rf:['EXT-COL-01']}
  ]
};
