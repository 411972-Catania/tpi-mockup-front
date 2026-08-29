import { FeatureDefinition } from '../models/feature.model';
import { IDENTIDAD_FEATURE } from '../../features/identidad/feature';
import { CURSOS_FEATURE } from '../../features/cursos/feature';
import { DESAFIOS_FEATURE } from '../../features/desafios/feature';
import { TEORICOS_FEATURE } from '../../features/teoricos/feature';
import { PRACTICOS_FEATURE } from '../../features/practicos/feature';
import { SANDBOX_FEATURE } from '../../features/sandbox/feature';
import { EVALUACION_LLM_FEATURE } from '../../features/evaluacion-llm/feature';
import { BANCO_FEATURE } from '../../features/banco/feature';
import { MERCADO_FEATURE } from '../../features/mercado/feature';
import { ROADMAP_FEATURE } from '../../features/roadmap/feature';
import { SOCIAL_FEATURE } from '../../features/social/feature';
import { BACKOFFICE_FEATURE } from '../../features/backoffice/feature';

export const FEATURES: FeatureDefinition[] = [
  IDENTIDAD_FEATURE, CURSOS_FEATURE, DESAFIOS_FEATURE, TEORICOS_FEATURE,
  PRACTICOS_FEATURE, SANDBOX_FEATURE, EVALUACION_LLM_FEATURE, BANCO_FEATURE,
  MERCADO_FEATURE, ROADMAP_FEATURE, SOCIAL_FEATURE, BACKOFFICE_FEATURE
];

export function getFeature(id: string): FeatureDefinition | undefined {
  return FEATURES.find(feature => feature.id === id);
}
