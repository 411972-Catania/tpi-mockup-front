import { FeatureDefinition } from '../../core/models/feature.model';
export const BANCO_FEATURE: FeatureDefinition = {
  id:'banco',order:8,slug:'banco',shortName:'Banco',name:'Banco',tagline:'El libro contable de monedas, XP, vidas y recompensas.',color:'#b38b00',tint:'#fff7d6',icon:'coins',primaryPhase:'MVP',
  responsibilities:['Ledger de movimientos','Transacciones','Saldos','Reglas de acreditación','Historial exportable','Reversión con traza'],
  dependencies:[{target:'identidad',reason:'Cada cuenta pertenece a un usuario y curso.',contract:'usuario / curso'},{target:'desafios',reason:'Acredita o debita por resultados.',contract:'evento de resultado'},{target:'cursos',reason:'Mantiene saldos estrictamente separados por curso.',contract:'course id'}],
  screens:[
    {id:'billetera',title:'Mi billetera',description:'Saldos por curso, vidas y últimos movimientos.',roles:['alumno'],phase:'MVP',mock:'wallet',rf:['RF-REC-01']},
    {id:'ledger',title:'Ledger de movimientos',description:'Débitos, créditos, origen y correlación.',roles:['admin'],phase:'MVP',mock:'table',rf:['RF-CFG-06']},
    {id:'reglas',title:'Reglas de acreditación',description:'Parámetros globales, vigencia y simulación.',roles:['admin'],phase:'MVP',mock:'wallet',rf:['RF-CFG-04','PAR-01']},
    {id:'transaccion',title:'Detalle de transacción',description:'Asientos, estado, actor y evidencia.',roles:['admin'],phase:'MVP',mock:'wallet',rf:['RF-NFR-01']},
    {id:'exportar',title:'Exportar y revertir',description:'Descarga de historial y reversa compensatoria.',roles:['admin'],phase:'Fase 2',mock:'table',rf:['EXT-BAN-01']}
  ]
};
