import { FeatureDefinition } from '../../core/models/feature.model';
export const SANDBOX_FEATURE: FeatureDefinition = {
  id:'sandbox',order:6,slug:'sandbox',shortName:'Sandbox',name:'Sandbox / Runtime',tagline:'Ejecuciones aisladas, limitadas, observables y reproducibles.',color:'#58616d',tint:'#edf0f3',icon:'terminal',primaryPhase:'MVP',
  responsibilities:['Ejecución aislada','Límites de CPU, memoria y tiempo','Captura de salida','Artefactos de ejecución'],
  dependencies:[{target:'practicos',reason:'Recibe código, lenguaje y casos de prueba.',contract:'run request'},{target:'identidad',reason:'Aplica cuota y traza por usuario.',contract:'actor / tenant'}],
  screens:[
    {id:'configurar',title:'Perfil de ejecución',description:'Imagen, comandos y límites permitidos.',roles:['profesor','admin'],phase:'MVP',mock:'runtime',rf:['RF-NFR-03']},
    {id:'ejecucion',title:'Ejecución en vivo',description:'Cola, fases, consumo y cancelación.',roles:['alumno','profesor'],phase:'MVP',mock:'runtime',rf:['RF-NFR-04']},
    {id:'detalle',title:'Detalle de ejecución',description:'Stdout, stderr, exit code, duración y memoria.',roles:['alumno','profesor'],phase:'MVP',mock:'runtime',rf:['RF-IA-27']},
    {id:'artefactos',title:'Artefactos',description:'Archivos generados, hashes y caducidad.',roles:['profesor'],phase:'Fase 2',mock:'table',rf:['EXT-ART-01']},
    {id:'salud',title:'Salud y capacidad',description:'Workers, cola, errores y cuotas.',roles:['admin'],phase:'MVP',mock:'metrics',rf:['RF-NFR-04']}
  ]
};
