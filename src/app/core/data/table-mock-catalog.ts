import { TableMockDefinition } from '../models/feature.model';

const table = (
  search: string,
  action: string,
  headings: [string, string, string, string],
  rows: TableMockDefinition['rows'],
  footer: string,
  filters = 2,
  exportLabel = 'Exportar'
): TableMockDefinition => ({ search, action, headings, rows, footer, filters, exportLabel });

const r = (avatar: string, primary: string, status: string, tone: TableMockDefinition['rows'][number]['tone'], detail: string, reference: string, secondary?: string) =>
  ({ avatar, primary, status, tone, detail, reference, secondary });

export const TABLE_MOCKS: Record<string, TableMockDefinition> = {
  'identidad/usuarios': table('Buscar por nombre, legajo o rol…', 'Crear usuario', ['Usuario', 'Rol', 'Estado', 'Último acceso'], [
    r('AT', 'Ana Torres', 'ALUMNO', 'neutral', 'Cuenta activa', 'Hoy · 10:42', 'Legajo 54231'),
    r('FG', 'Federico Gómez', 'PROFESOR', 'neutral', 'Cuenta activa', 'Ayer · 18:20', 'Cursos: 2'),
    r('LM', 'Lucía Martínez', 'ALUMNO', 'warning', 'Pendiente de validación', '27 ago · 09:11', 'Curso K1024'),
    r('PA', 'Paula Acosta', 'ADMIN', 'success', '2FA verificado', '26 ago · 14:03', 'Sin restricciones')
  ], 'Mostrando 4 de 120 usuarios'),
  'cursos/pendientes': table('Buscar solicitud o legajo…', 'Resolver selección', ['Solicitante', 'Curso', 'Motivo', 'Acción requerida'], [
    r('LM', 'Lucía Martínez', 'K1024', 'neutral', 'Legajo no figura en padrón', 'Incorporar o exceptuar', '54278 · lucia@alumnos.utn.edu.ar'),
    r('RS', 'Ramiro Suárez', 'K1024', 'warning', 'Email no coincide', 'Revisar padrón', '54280 · ramiro@alumnos.utn.edu.ar'),
    r('CV', 'Camila Vera', 'K1024', 'neutral', 'Solicitud recibida hoy', 'Incorporar al padrón', '54283 · camila@alumnos.utn.edu.ar')
  ], '3 solicitudes pendientes de validación', 1, 'Descargar padrón'),
  'identidad/auditoria': table('Buscar actor, acción o recurso…', 'Configurar alertas', ['Evento', 'Actor', 'Resultado', 'Fecha y traza'], [
    r('↗', 'Baja solicitada: prof.gomez', 'ADMIN', 'warning', 'Confirmación reforzada pendiente', 'AUD-88421', 'Hoy · 11:08'),
    r('✓', 'Cambio de política de retención', 'ADMIN', 'success', 'Aplicado hacia adelante', 'AUD-88420', 'Hoy · 09:31'),
    r('⌁', 'Permiso por excepción', 'PROFESOR', 'neutral', 'Motivo registrado', 'AUD-88419', 'Ayer · 17:14')
  ], 'Mostrando los últimos 3 eventos'),

  'cursos/comisiones': table('Buscar comisión o estado…', 'Nueva comisión', ['Comisión', 'Matrícula', 'Inicio', 'Estado'], [
    r('A', 'K1024 · Turno mañana', '28 / 30', 'neutral', '17 mar 2026', 'Activa', 'Algoritmos · 2026'),
    r('B', 'K1025 · Turno noche', '24 / 30', 'neutral', '17 mar 2026', 'Activa', 'Algoritmos · 2026'),
    r('C', 'K1026 · Intensiva', '12 / 30', 'warning', '14 sep 2026', 'Borrador', 'Inicio pendiente')
  ], '3 comisiones de tu curso', 1),
  'cursos/padron': table('Buscar por alumno, legajo o email…', 'Agregar alumno', ['Alumno', 'Legajo', 'Email institucional', 'Validación'], [
    r('AT', 'Ana Torres', '54231', 'success', 'ana@alumnos.utn.edu.ar', 'Validado', 'Alta manual'),
    r('RS', 'Ramiro Suárez', '54280', 'success', 'ramiro@alumnos.utn.edu.ar', 'Validado', 'Carga masiva'),
    r('LM', 'Lucía Martínez', '54278', 'warning', 'lucia@alumnos.utn.edu.ar', 'Duplicado detectado', 'Revisar fila'),
    r('CV', 'Camila Vera', '54283', 'neutral', 'camila@alumnos.utn.edu.ar', 'Pendiente', 'Sin cuenta')
  ], 'Mostrando 4 de 31 registros', 1, 'Importar CSV'),
  'cursos/presencialidad': table('Buscar alumno o encuentro…', 'Tomar asistencia', ['Alumno', 'Clase', 'Asistencia', 'Observación'], [
    r('AT', 'Ana Torres', 'Clase 14 · Árboles', 'success', 'Presente', 'A tiempo', '10:03'),
    r('RS', 'Ramiro Suárez', 'Clase 14 · Árboles', 'warning', 'Tardanza', '18 min tarde', '10:18'),
    r('LM', 'Lucía Martínez', 'Clase 14 · Árboles', 'danger', 'Ausente', 'Sin justificación', '—')
  ], '3 de 28 alumnos registrados', 1, 'Exportar asistencia'),

  'desafios/biblioteca': table('Buscar desafío por nombre o tema…', 'Crear desafío', ['Desafío', 'Tipo', 'Dificultad', 'Uso'], [
    r('↻', 'Recursividad: caso base', 'Práctico', 'neutral', 'Media · obligatorio', '4 cursos', 'v3 · 12 entregas'),
    r('?', 'Complejidad temporal', 'Teórico', 'neutral', 'Básica · opcional', '2 cursos', 'v1 · 44 entregas'),
    r('⌘', 'Árboles AVL', 'Práctico', 'warning', 'Avanzada · borrador', 'Sin publicar', 'v1 · 0 entregas')
  ], 'Mostrando 3 de 18 desafíos'),
  'desafios/entregas': table('Buscar alumno, desafío o estado…', 'Corregir selección', ['Alumno', 'Desafío', 'Resultado', 'Próximo paso'], [
    r('AT', 'Ana Torres', 'Recursividad: caso base', 'success', '4 / 4 tests · intento 2/3', 'Acreditar recompensa', 'Entregó hace 12 min'),
    r('RS', 'Ramiro Suárez', 'Recursividad: caso base', 'warning', '3 / 4 tests · intento 3/3', 'Revisar feedback', 'Entregó hace 28 min'),
    r('CV', 'Camila Vera', 'Complejidad temporal', 'neutral', 'Respuesta abierta', 'Corrección docente', 'Entregó ayer')
  ], '3 entregas requieren atención', 3),
  'desafios/historial': table('Buscar versión o autor…', 'Comparar versiones', ['Versión', 'Cambio', 'Autor', 'Vigencia'], [
    r('v3', 'Recursividad: caso base', 'PROFESOR', 'neutral', 'Ajuste de consigna y test privado', 'Vigente', '28 ago · 09:21'),
    r('v2', 'Recursividad: caso base', 'PROFESOR', 'neutral', 'Agrega caso lista vacía', 'Supersedida', '20 ago · 16:43'),
    r('v1', 'Recursividad: caso base', 'ADMIN', 'neutral', 'Publicación inicial', 'Histórica', '12 ago · 10:14')
  ], '3 versiones registradas', 1),

  'teoricos/banco': table('Buscar ítem, tema o etiqueta…', 'Crear ítem', ['Ítem', 'Formato', 'Tema', 'Estado'], [
    r('A', 'Complejidad de merge sort', 'Opción múltiple', 'neutral', 'Algoritmos · Media', 'Publicado', '12 usos'),
    r('V/F', 'Propiedades de una pila', 'Verdadero/Falso', 'neutral', 'Estructuras · Básica', 'Publicado', '8 usos'),
    r('↔', 'Ordenar pasos de BFS', 'Ordenar secuencia', 'warning', 'Grafos · Media', 'Borrador', 'Sin uso')
  ], '3 de 64 ítems disponibles', 2),
  'practicos/tests': table('Buscar caso por nombre…', 'Agregar caso', ['Caso de prueba', 'Visibilidad', 'Resultado esperado', 'Peso'], [
    r('01', 'Lista vacía', 'Público', 'neutral', 'Retorna -1', '15%', 'test_lista_vacia'),
    r('02', 'Elemento presente', 'Público', 'neutral', 'Índice correcto', '20%', 'test_elemento_presente'),
    r('03', 'Valores repetidos', 'Privado', 'warning', 'Primer índice válido', '35%', 'test_duplicados'),
    r('04', 'Lista de 10k elementos', 'Privado', 'neutral', 'Dentro de tiempo', '30%', 'test_rendimiento')
  ], '4 casos configurados', 1, 'Importar tests'),
  'sandbox/artefactos': table('Buscar ejecución o hash…', 'Configurar retención', ['Artefacto', 'Ejecución', 'Tamaño', 'Caducidad'], [
    r('▣', 'stdout.log', 'AQ-8841', 'neutral', '18 KB · salida capturada', 'Expira en 6 días', 'sha256: f12a…'),
    r('▣', 'resultado.json', 'AQ-8841', 'neutral', '2 KB · resultados de tests', 'Expira en 6 días', 'sha256: 98bc…'),
    r('▣', 'cobertura.xml', 'AQ-8839', 'warning', '24 KB · ejecución fallida', 'Expira mañana', 'sha256: a7e3…')
  ], '3 artefactos en el rango elegido', 1),

  'evaluacion-llm/proveedores': table('Buscar función o modelo…', 'Asignar modelo', ['Función IA', 'Modelo activo', 'Proveedor', 'Estado'], [
    r('✦', 'Tutor de desafíos', 'gpt-5.4-mini', 'success', 'OpenAI · versión 2026-08', 'Activo', 'Límite: 30/día'),
    r('✓', 'Evaluador de uso', 'gpt-5.4', 'success', 'OpenAI · versión 2026-08', 'Calibrado', 'v2.1 aprobada'),
    r('⌁', 'Moderador de chat', 'gpt-5.4-mini', 'neutral', 'OpenAI · versión 2026-08', 'Activo', 'Política v3')
  ], '3 funciones configuradas', 1),
  'evaluacion-llm/apelaciones': table('Buscar alumno o desafío…', 'Asignar revisor', ['Caso', 'Motivo', 'Evidencia', 'Estado'], [
    r('AT', 'Apelación #A-1208', 'ALUMNO', 'neutral', 'Score IA: 76 · Recursividad', 'En revisión', 'Recibida hoy'),
    r('RS', 'Apelación #A-1205', 'ALUMNO', 'warning', 'Score IA: 52 · Árboles AVL', 'Requiere docente', 'Muestreo auditado'),
    r('LM', 'Apelación #A-1199', 'ALUMNO', 'success', 'Score IA: 88 · Complejidad', 'Resuelta', 'Ajuste +4 XP')
  ], '3 apelaciones en el período', 1),

  'banco/ledger': table('Buscar movimiento o correlación…', 'Ajuste manual', ['Movimiento', 'Cuenta', 'Importe', 'Origen'], [
    r('+', 'Acreditación por desafío', 'Ana Torres', 'success', '+100 monedas', 'DES-5621', 'Recursividad'),
    r('−', 'Canje de escudo', 'Ana Torres', 'warning', '−500 monedas', 'MKT-391', 'Mercado del curso'),
    r('+', 'Bonus por calidad', 'Ramiro Suárez', 'success', '+42 XP', 'DES-5620', 'Evaluación de entrega')
  ], 'Mostrando 3 de 428 asientos', 3, 'Exportar ledger'),
  'banco/exportar': table('Buscar solicitud o período…', 'Nueva exportación', ['Solicitud', 'Alcance', 'Formato', 'Estado'], [
    r('CSV', 'Movimientos agosto', 'Curso K1024', 'success', 'CSV · 428 registros', 'Listo para descargar', 'EXP-2408'),
    r('↩', 'Reversa MKT-391', 'Curso K1024', 'warning', 'Asiento compensatorio', 'Pendiente de 2FA', 'REV-0291'),
    r('XLS', 'Resumen por alumno', 'Curso K1025', 'neutral', 'XLSX · 24 alumnos', 'En preparación', 'EXP-2409')
  ], '3 operaciones de salida', 1),

  'roadmap/ranking': table('Buscar posición o alumno…', 'Ver mi detalle', ['Posición', 'Alumno', 'XP y nivel', 'Zona'], [
    r('1', 'Ana Torres', 'Nivel 7', 'success', '4.820 XP', 'P90 · promoción', '100% obligatorios'),
    r('2', 'Ramiro Suárez', 'Nivel 6', 'neutral', '4.300 XP', 'Sin zona', '2 vidas perdidas'),
    r('9', 'Vos · Franco Tania', 'Nivel 6', 'neutral', '3.850 XP', 'Sin zona', '3 desafíos pendientes'),
    r('27', 'Alumno sin identificar', 'Nivel 3', 'danger', '1.120 XP', 'P10 · riesgo', 'Obligatorios pendientes')
  ], 'Ranking de 28 alumnos', 1),
  'social/moderacion': table('Buscar incidente o canal…', 'Configurar política', ['Incidente', 'Canal', 'Severidad', 'Acción'], [
    r('!', 'MSG-884 · posible solución', '# general', 'warning', 'Media · bloqueado', 'Revisión docente', 'Contexto retenido'),
    r('!', 'MSG-879 · lenguaje ofensivo', 'DM alumno↔alumno', 'danger', 'Alta · bloqueado', 'Notificar admin', 'Apelable'),
    r('✓', 'MSG-871 · spam leve', '# consultas', 'neutral', 'Baja · entregado', 'Sin acción visible', 'Auditoría')
  ], '3 incidentes en la última semana', 2),

  'backoffice/administradores': table('Buscar administrador…', 'Crear administrador', ['Administrador', '2FA', 'Estado', 'Acciones'], [
    r('PA', 'Paula Acosta', 'Verificado', 'success', 'Activa', 'Sin restricciones', 'Último admin: no baja'),
    r('MR', 'Marcos Rivas', 'Verificado', 'success', 'Activo', 'Puede administrar', 'Alta 2025'),
    r('LS', 'Laura Silva', 'Pendiente', 'warning', 'Invitación enviada', 'Completar 2FA', 'Expira en 2 días')
  ], '3 administradores registrados', 1),
  'backoffice/proveedores': table('Buscar proveedor o credencial…', 'Agregar proveedor', ['Proveedor', 'Modelos asignados', 'Salud', 'Rotación'], [
    r('OA', 'OpenAI', 'Tutor, evaluador, moderador', 'success', 'Operativo · 99.98%', 'Token vigente', 'Rotar: 15 nov'),
    r('LC', 'Proveedor local', 'RAG de curso', 'neutral', 'Operativo · 99.71%', 'Token vigente', 'Rotar: 02 oct'),
    r('AR', 'Archivo histórico', 'Sin modelos activos', 'warning', 'Deshabilitado', 'Sin tráfico', 'Revisar contrato')
  ], '3 proveedores configurados', 1),
  'backoffice/exportaciones': table('Buscar exportación o curso…', 'Solicitar exportación', ['Exportación', 'Alcance', 'Retención', 'Estado'], [
    r('CSV', 'Resultados académicos', 'Algoritmos 2026', 'success', 'Académico · 5 años', 'Descarga disponible', 'EXP-771'),
    r('ZIP', 'Auditoría de curso', 'Arquitectura 2026', 'warning', 'Vence en 89 días', 'Requiere aprobación', 'EXP-772'),
    r('XLS', 'KPIs de satisfacción', 'Plataforma', 'neutral', 'Anónimo · consolidado', 'En preparación', 'EXP-773')
  ], '3 solicitudes recientes', 1)
};

export function getTableMock(featureId: string, screenId: string): TableMockDefinition {
  const mock = TABLE_MOCKS[`${featureId}/${screenId}`];
  if (!mock) throw new Error(`Missing table mock for ${featureId}/${screenId}`);
  return mock;
}
