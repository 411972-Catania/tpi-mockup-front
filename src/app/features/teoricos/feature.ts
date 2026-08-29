import { FeatureDefinition } from '../../core/models/feature.model';
export const TEORICOS_FEATURE: FeatureDefinition = {
  id:'teoricos',order:4,slug:'teoricos',shortName:'Teóricos',name:'Teóricos y Encuestas',tagline:'Comprensión conceptual, corrección y escucha anónima.',color:'#e68024',tint:'#fff1df',icon:'check',primaryPhase:'MVP',
  responsibilities:['Ítems teóricos','Corrección','Encuestas con anonimato desacoplado','Banco de ítems por tema'],
  dependencies:[{target:'desafios',reason:'Usa el ciclo de vida y la asignación común.',contract:'desafío / entrega'},{target:'identidad',reason:'Registra participación sin vincular respuestas anónimas.',contract:'participación separada'}],
  screens:[
    {id:'banco',title:'Banco de ítems',description:'Preguntas por tipo, tema y dificultad.',roles:['profesor','admin'],phase:'MVP',mock:'table',rf:['RF-DES-01']},
    {id:'editor',title:'Editor de evaluación',description:'Opción múltiple, V/F, pares, orden y respuesta abierta.',roles:['profesor'],phase:'MVP',mock:'builder',rf:['RF-DES-04']},
    {id:'resolver',title:'Resolver desafío teórico',description:'Experiencia enfocada y estado de avance.',roles:['alumno'],phase:'MVP',mock:'quiz',rf:['RF-DES-07']},
    {id:'corregir',title:'Corrección docente',description:'Respuestas abiertas, rúbrica y feedback.',roles:['profesor'],phase:'MVP',mock:'quiz',rf:['RF-DES-03']},
    {id:'encuesta',title:'Encuesta de satisfacción',description:'Tres dimensiones, estrellas y abstención.',roles:['alumno','profesor'],phase:'MVP',mock:'quiz',rf:['RF-ENC-01','RF-ENC-09']},
    {id:'resultados',title:'Resultados anónimos',description:'CSAT, comentarios moderados y umbral mínimo.',roles:['profesor','admin'],phase:'MVP',mock:'metrics',rf:['RF-ENC-04','RF-ENC-13']}
  ]
};
