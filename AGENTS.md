# Guía para contribuir al mockup

Este repositorio es un monolito modular Angular: cada uno de los 12 grupos es dueño de un feature bajo `src/app/features/<modulo>/`.

## Fuente de verdad

- Las pantallas, roles, fases y dependencias del módulo se declaran en `feature.ts`.
- `src/app/core/data/platform-catalog.ts` reúne los 12 features.
- La pantalla **Dependencias** consume esa información; no mantiene una lista paralela.
- Las vistas tabulares usan `src/app/core/data/table-mock-catalog.ts` con una entrada por `featureId/screenId`.

## Al cambiar una pantalla

1. Agregar, modificar o eliminar su `ScreenDefinition` en el `feature.ts` del equipo dueño.
2. Si cambia un contrato o la responsabilidad del dominio, actualizar `dependencies` con el módulo proveedor, el motivo y el contrato.
3. Si es una tabla, actualizar el catálogo de tablas con columnas y filas específicas de esa pantalla.
4. Si la pantalla la ven varios roles, revisar que alumno, profesor y admin tengan contenido y acciones coherentes.
5. Para padrón, solicitudes de matrícula y presencialidad, preservar el contexto `cursoId`.

## Límites de arquitectura

- No importar componentes internos de otro feature.
- Compartir UI sin reglas de negocio desde `shared/`.
- Compartir modelos, sesión y contratos desde `core/`.
- Los únicos roles válidos son `alumno`, `profesor` y `admin`.

## Verificación

Usar una versión compatible con Angular 22 (Node 22.22.3+ o 24.15.0+) y ejecutar:

```bash
npm run build
npm test -- --watch=false
```
