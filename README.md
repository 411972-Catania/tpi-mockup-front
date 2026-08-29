# Aula Quest · blueprint funcional

Prototipo navegable del front de la **Plataforma de Aprendizaje Gamificado**. Resume las vistas propuestas para los 12 equipos, los roles que las usan, su fase y las dependencias entre dominios.

## Ejecutar

Angular 22 requiere Node `^22.22.3`, `^24.15.0` o `^26.0.0`.

```bash
npm install
npm start
```

Abrir `http://localhost:4200`.

```bash
npm run build   # compilación de producción
npm test        # chequeos mínimos del catálogo
```

## Organización

```text
src/app/
├── core/                 # modelos, catálogo y contexto de rol
├── layout/               # shell global
├── shared/               # iconos y renderizador de mocks
└── features/
    ├── identidad/
    ├── cursos/
    ├── desafios/
    ├── teoricos/
    ├── practicos/
    ├── sandbox/
    ├── evaluacion-llm/
    ├── banco/
    ├── mercado/
    ├── roadmap/
    ├── social/
    └── backoffice/
```

Cada carpeta de equipo contiene su definición funcional (`feature.ts`) y una ruta lazy (`routes.ts`). Las piezas comunes no conocen reglas de negocio. La pantalla **Dependencias** documenta qué contrato consume cada módulo.

## Alcance

- 77 vistas distribuidas entre MVP, Fase 2 y Fase 3.
- Roles simulados: alumno, profesor y admin.
- Mocks visuales sin backend ni persistencia.
- Referencias `RF-*` trazadas desde el PRD cuando corresponde; los agregados propuestos usan prefijo `EXT-*`.

## Guía de colaboración

Cada grupo es dueño de su slice en `src/app/features/<modulo>/`. Antes de modificar una vista, identificá su dominio funcional: el módulo dueño define la pantalla; los demás la consumen mediante contratos, no importando componentes internos.

### Regla de sincronización

Si agregás, modificás o eliminás una vista, actualizá su definición en `feature.ts`. El mapa general y la pantalla **Dependencias** se alimentan de ese catálogo, por lo que también deben mantenerse consistentes:

- **Pantalla, rol o fase:** actualizar `screens` en el `feature.ts` del equipo dueño.
- **Nueva dependencia o cambio de responsabilidad:** actualizar `dependencies` en el mismo archivo, con motivo y contrato mínimo. La matriz de arquitectura se actualiza desde allí.
- **Vista de tabla:** crear o ajustar su entrada en `src/app/core/data/table-mock-catalog.ts`; no reutilizar datos de otra pantalla.
- **Pantalla compartida por roles:** mostrar acciones y datos coherentes para cada rol (`alumno`, `profesor`, `admin`).
- **Pantalla por curso:** conservar el contexto `cursoId` en acciones como padrón, matrícula o presencialidad.

### Límites de los módulos

- `core/`: modelos, catálogo, contexto de rol y contratos transversales.
- `shared/`: componentes reutilizables sin reglas de negocio de un dominio.
- `features/<modulo>/`: reglas, metadatos y vistas propias del equipo.
- No importar componentes internos de otro feature. Si una necesidad cruza módulos, acordar el contrato y declararlo en `dependencies`.

### Checklist antes de integrar

1. Verificar que la vista esté ubicada en el módulo dueño.
2. Revisar roles, fase, RF y dependencias.
3. Ajustar el mock y, si aplica, el catálogo de tablas.
4. Ejecutar `npm run build` y `npm test` con Node compatible.
5. Incluir en el PR una captura o descripción de la pantalla afectada.

Las reglas operativas para asistentes de código también están en [`AGENTS.md`](AGENTS.md).
