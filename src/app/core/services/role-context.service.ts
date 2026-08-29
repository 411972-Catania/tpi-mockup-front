import { Injectable, signal } from '@angular/core';
import { Role } from '../models/feature.model';

@Injectable({ providedIn: 'root' })
export class RoleContextService {
  readonly role = signal<Role>('alumno');
}
