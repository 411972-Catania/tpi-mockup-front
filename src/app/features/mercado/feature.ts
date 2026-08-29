import { FeatureDefinition } from '../../core/models/feature.model';
export const MERCADO_FEATURE: FeatureDefinition = {
  id:'mercado',order:9,slug:'mercado',shortName:'Mercado',name:'Mercado',tagline:'Canjes dentro del curso, inventario y economía entre pares.',color:'#ce4676',tint:'#ffe8f0',icon:'shop',primaryPhase:'Fase 2',
  responsibilities:['Catálogo','Compra','Inventario del alumno','Consumo de ítems','Intercambio entre alumnos','Subastas'],
  dependencies:[{target:'banco',reason:'Reserva y mueve monedas de forma atómica.',contract:'saldo / transacción'},{target:'cursos',reason:'Catálogo y monedas están limitados al curso.',contract:'curso activo'},{target:'identidad',reason:'Valida comprador, vendedor y permisos.',contract:'usuario / rol'}],
  screens:[
    {id:'catalogo',title:'Catálogo del curso',description:'Vidas y equipamiento disponibles.',roles:['alumno','profesor'],phase:'Fase 2',mock:'market',rf:['RF-INT-01','RF-INT-04']},
    {id:'detalle',title:'Detalle del ítem',description:'Efecto, precio, disponibilidad y reglas.',roles:['alumno'],phase:'Fase 2',mock:'market',rf:['RF-REC-03']},
    {id:'compra',title:'Confirmar canje',description:'Saldo, costo y resultado de la transacción.',roles:['alumno'],phase:'Fase 2',mock:'wallet',rf:['RF-INT-01']},
    {id:'inventario',title:'Mi inventario',description:'Equipamiento vigente, uso y trazabilidad.',roles:['alumno'],phase:'Fase 2',mock:'market',rf:['RF-REC-05']},
    {id:'intercambio',title:'Intercambio entre alumnos',description:'Oferta directa de monedas dentro del curso.',roles:['alumno'],phase:'Fase 2',mock:'market',rf:['RF-INT-02']},
    {id:'subasta',title:'Sala de subastas',description:'Pujas, reserva de saldo y cierre.',roles:['alumno','profesor'],phase:'Fase 3',mock:'market',rf:['RF-INT-03','RF-INT-06']}
  ]
};
