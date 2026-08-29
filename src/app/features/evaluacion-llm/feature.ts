import { FeatureDefinition } from '../../core/models/feature.model';
export const EVALUACION_LLM_FEATURE: FeatureDefinition = {
  id:'evaluacion-llm',order:7,slug:'evaluacion-llm',shortName:'Evaluación IA',name:'Evaluación LLM',tagline:'Una IA calibrada, auditable y pedagógicamente limitada.',color:'#a144d4',tint:'#f6e9ff',icon:'spark',primaryPhase:'MVP',
  responsibilities:['Rúbricas','Invocación del modelo','Golden set y calibración','Bloqueo de activación','Configuración centralizada','Tablero de deriva'],
  dependencies:[{target:'practicos',reason:'Evalúa transcripciones y contexto de resolución.',contract:'transcripción / intento'},{target:'cursos',reason:'Calibra umbrales por curso y bloquea activación.',contract:'curso / estado'},{target:'sandbox',reason:'Puede consumir evidencia de pruebas y ejecución.',contract:'resultado de tests'}],
  screens:[
    {id:'rubrica',title:'Rúbrica versionada',description:'Cinco dimensiones, pesos y versión activa.',roles:['admin'],phase:'MVP',mock:'rubric',rf:['RF-IA-13','RF-IA-29']},
    {id:'proveedores',title:'Modelos por función',description:'Tutor, evaluador, moderador, generador y RAG.',roles:['admin'],phase:'MVP',mock:'table',rf:['RF-IA-23','RF-IA-24']},
    {id:'golden-set',title:'Golden set del curso',description:'Casos base, score esperado y cobertura.',roles:['profesor'],phase:'MVP',mock:'rubric',rf:['RF-IA-30']},
    {id:'calibracion',title:'Calibrar evaluador',description:'Corrida, desvíos y aprobación dentro de tolerancia.',roles:['profesor','admin'],phase:'MVP',mock:'metrics',rf:['RF-IA-31','RF-IA-36']},
    {id:'bloqueo',title:'Checklist de activación',description:'Estado bloqueante sin override administrativo.',roles:['profesor','admin'],phase:'MVP',mock:'progress',rf:['RF-CUR-08b','RF-IA-36b']},
    {id:'deriva',title:'Deriva del evaluador',description:'Tendencias, cohortes afectadas y recalibración.',roles:['admin'],phase:'Fase 2',mock:'metrics',rf:['RF-IA-32','RF-IA-33']},
    {id:'apelaciones',title:'Revisión y apelaciones',description:'Muestra auditada y supervisión humana.',roles:['alumno','profesor'],phase:'MVP',mock:'table',rf:['RF-IA-17','RF-IA-18']}
  ]
};
