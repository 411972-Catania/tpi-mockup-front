import { FeatureDefinition } from '../../core/models/feature.model';
export const CURSOS_FEATURE: FeatureDefinition = {
  id:'cursos', order:2, slug:'cursos', shortName:'Cursos', name:'Cursos y Matrícula', tagline:'Cursos, comisiones, padrón y ciclo académico.', color:'#087e8b', tint:'#dff6f5', icon:'book', primaryPhase:'MVP',
  responsibilities:['Alta de curso','Comisiones','Inscripción de alumnos','Ciclo de vida y archivado','Servicio de presencialidad'],
  dependencies:[
    { target:'identidad', reason:'Valida dueño, roles y alumnos.', contract:'usuarios / roles' },
    { target:'evaluacion-llm', reason:'La calibración aprobada bloquea la activación.', contract:'estado de calibración' }
  ],
  screens:[
    {id:'mis-cursos',title:'Mis cursos',description:'Cursos activos, borradores y archivados.',roles:['alumno','profesor'],phase:'MVP',mock:'course-list',rf:['RF-CUR-08','RF-CUR-09']},
    {id:'nuevo',title:'Crear curso',description:'Datos base, template y fecha de inicio.',roles:['profesor'],phase:'MVP',mock:'builder',rf:['RF-CUR-02']},
    {id:'configuracion',title:'Configuración del curso',description:'Reglas pedagógicas, invitación y estado.',roles:['profesor'],phase:'MVP',mock:'course-settings',rf:['RF-CFG-02','RF-USR-05g1']},
    {id:'comisiones',title:'Comisiones y matrícula',description:'Cohortes, inscriptos y cambios de comisión.',roles:['profesor'],phase:'MVP',mock:'table',rf:['RF-USR-05e']},
    {id:'padron',title:'Padrón del curso',description:'Alta individual, importación masiva y errores.',roles:['profesor'],phase:'MVP',mock:'table',rf:['RF-USR-05c','RF-USR-05d']},
    {id:'pendientes',title:'Solicitudes de matrícula',description:'Casos pendientes contra el padrón del curso.',roles:['profesor'],phase:'MVP',mock:'table',rf:['RF-USR-05g','RF-USR-05h']},
    {id:'presencialidad',title:'Registro de asistencia',description:'Encuentros, presentes y observaciones.',roles:['profesor'],phase:'Fase 2',mock:'table',rf:['EXT-PRES-01']},
    {id:'cierre',title:'Asistente de cierre',description:'Estados académicos, validaciones y archivado.',roles:['profesor'],phase:'MVP',mock:'course-close',rf:['RF-CUR-08b','RF-RNK-10']}
  ]
};
