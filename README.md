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
