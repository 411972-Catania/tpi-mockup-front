export type Role = 'alumno' | 'profesor' | 'admin';
export type Phase = 'MVP' | 'Fase 2' | 'Fase 3';
export type MockKind =
  | 'access'
  | 'registration'
  | 'onboarding'
  | 'profile'
  | 'table'
  | 'course'
  | 'course-settings'
  | 'course-close'
  | 'course-list'
  | 'roadmap'
  | 'builder'
  | 'quiz'
  | 'ide'
  | 'runtime'
  | 'rubric'
  | 'wallet'
  | 'market'
  | 'progress'
  | 'chat'
  | 'metrics';

export type TableTone = 'success' | 'warning' | 'danger' | 'neutral';

export interface TableMockRow {
  avatar: string;
  primary: string;
  secondary?: string;
  status: string;
  tone: TableTone;
  detail: string;
  reference: string;
}

export interface TableMockDefinition {
  search: string;
  action: string;
  exportLabel?: string;
  filters?: number;
  headings: [string, string, string, string];
  rows: TableMockRow[];
  footer: string;
}

export interface ScreenDefinition {
  id: string;
  title: string;
  description: string;
  roles: Role[];
  phase: Phase;
  mock: MockKind;
  rf: string[];
}

export interface DependencyDefinition {
  target: string;
  reason: string;
  contract: string;
}

export interface FeatureDefinition {
  id: string;
  order: number;
  slug: string;
  shortName: string;
  name: string;
  tagline: string;
  color: string;
  tint: string;
  icon: string;
  primaryPhase: Phase;
  responsibilities: string[];
  screens: ScreenDefinition[];
  dependencies: DependencyDefinition[];
}
