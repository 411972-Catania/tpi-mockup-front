import { FeatureDefinition } from '../../core/models/feature.model';
export const PRACTICOS_FEATURE: FeatureDefinition = {
  id:'practicos',order:5,slug:'practicos',shortName:'Prácticos',name:'Desafíos Prácticos',tagline:'Consignas de código, pruebas, entregas y feedback accionable.',color:'#1971c2',tint:'#e5f1ff',icon:'code',primaryPhase:'MVP',
  responsibilities:['Consignas de código','Casos de prueba','Formato de entrega','Feedback al alumno','Anti-cheat por similitud'],
  dependencies:[{target:'desafios',reason:'Hereda ciclo de vida, intentos y asignación.',contract:'desafío / entrega'},{target:'sandbox',reason:'Ejecuta código y pruebas de forma aislada.',contract:'solicitud / resultado de ejecución'},{target:'evaluacion-llm',reason:'Tutoriza y evalúa la interacción con IA.',contract:'transcripción / score'}],
  screens:[
    {id:'consigna',title:'Editor de consigna',description:'Objetivo, restricciones, starter code y riesgo de fuga.',roles:['profesor'],phase:'MVP',mock:'builder',rf:['RF-IA-19']},
    {id:'tests',title:'Casos de prueba',description:'Públicos, privados, pesos y resultado esperado.',roles:['profesor'],phase:'MVP',mock:'table',rf:['RF-DES-08']},
    {id:'formato',title:'Formato de entrega',description:'Lenguaje, repositorio, rama y archivos requeridos.',roles:['profesor'],phase:'MVP',mock:'builder',rf:['RF-USR-06']},
    {id:'ide',title:'IDE de resolución',description:'Código, consola, tests y tutor IA restringido.',roles:['alumno'],phase:'MVP',mock:'ide',rf:['RF-IA-01','RF-IA-04']},
    {id:'feedback',title:'Resultado y feedback',description:'Pruebas, devolución, XP y score de uso de IA.',roles:['alumno','profesor'],phase:'MVP',mock:'ide',rf:['RF-IA-16']},
    {id:'similitud',title:'Reporte de similitud',description:'Coincidencias entre entregas y revisión humana.',roles:['profesor'],phase:'Fase 2',mock:'metrics',rf:['EXT-SIM-01']}
  ]
};
