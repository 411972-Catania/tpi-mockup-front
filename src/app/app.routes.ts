import { Routes } from '@angular/router';
import { OverviewComponent } from './features/overview/overview.component';
import { ArchitectureComponent } from './features/architecture/architecture.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent, title: 'Mapa general · Aula Quest' },
  { path: 'arquitectura', component: ArchitectureComponent, title: 'Dependencias · Aula Quest' },
  { path: 'modulo/identidad', loadChildren: () => import('./features/identidad/routes') },
  { path: 'modulo/cursos', loadChildren: () => import('./features/cursos/routes') },
  { path: 'modulo/desafios', loadChildren: () => import('./features/desafios/routes') },
  { path: 'modulo/teoricos', loadChildren: () => import('./features/teoricos/routes') },
  { path: 'modulo/practicos', loadChildren: () => import('./features/practicos/routes') },
  { path: 'modulo/sandbox', loadChildren: () => import('./features/sandbox/routes') },
  { path: 'modulo/evaluacion-llm', loadChildren: () => import('./features/evaluacion-llm/routes') },
  { path: 'modulo/banco', loadChildren: () => import('./features/banco/routes') },
  { path: 'modulo/mercado', loadChildren: () => import('./features/mercado/routes') },
  { path: 'modulo/roadmap', loadChildren: () => import('./features/roadmap/routes') },
  { path: 'modulo/social', loadChildren: () => import('./features/social/routes') },
  { path: 'modulo/backoffice', loadChildren: () => import('./features/backoffice/routes') },
  { path: '**', redirectTo: '' }
];
