import { FeatureDefinition } from '../../core/models/feature.model';
export const ROADMAP_FEATURE: FeatureDefinition = {
  id:'roadmap',order:10,slug:'roadmap',shortName:'Progreso',name:'Roadmap y Progreso',tagline:'El mapa visible del aprendizaje, los desbloqueos y la competencia.',color:'#38a169',tint:'#e4f7ec',icon:'map',primaryPhase:'MVP',
  responsibilities:['Grafo de contenidos','Prerequisitos y desbloqueo','XP y niveles','Logros','Visualización del recorrido','Comparativas de cohorte'],
  dependencies:[{target:'cursos',reason:'Cada roadmap pertenece a un curso.',contract:'curso / secciones'},{target:'desafios',reason:'Los nodos publican desafíos y consumen estados.',contract:'desafío / progreso'},{target:'banco',reason:'Obtiene XP, vidas, monedas e insignias.',contract:'saldos / movimientos'}],
  screens:[
    {id:'recorrido',title:'Mi recorrido',description:'Mapa explorable, nodos y próximos desbloqueos.',roles:['alumno'],phase:'MVP',mock:'roadmap',rf:['RF-CUR-01','RF-CUR-06']},
    {id:'editor',title:'Editor gráfico de roadmap',description:'Secciones, nodos, conexiones y validaciones.',roles:['profesor'],phase:'MVP',mock:'roadmap',rf:['RF-CUR-04','RF-CUR-07']},
    {id:'nodo',title:'Configurar nodo',description:'Desafío, recompensa y umbral de XP.',roles:['profesor'],phase:'MVP',mock:'builder',rf:['RF-CUR-06']},
    {id:'progreso',title:'Mi progreso',description:'XP, nivel, insignias y desafíos completados.',roles:['alumno','profesor'],phase:'MVP',mock:'progress',rf:['RF-NIV-01']},
    {id:'niveles',title:'Niveles y logros',description:'Curva de XP y hasta diez niveles por curso.',roles:['alumno','profesor'],phase:'Fase 2',mock:'progress',rf:['RF-NIV-03','RF-NIV-04']},
    {id:'ranking',title:'Ranking del curso',description:'Posiciones, P90/P10 y privacidad por rol.',roles:['alumno','profesor'],phase:'MVP',mock:'table',rf:['RF-RNK-01','RF-RNK-03']},
    {id:'cohorte',title:'Comparativa de cohorte',description:'Ritmo, avance y zonas de riesgo agregadas.',roles:['profesor'],phase:'Fase 2',mock:'metrics',rf:['KPI-06','KPI-07']}
  ]
};
