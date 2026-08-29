import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FEATURES } from '../core/data/platform-catalog';
import { Role } from '../core/models/feature.model';
import { RoleContextService } from '../core/services/role-context.service';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, IconComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css'
})
export class AppShellComponent {
  readonly features = FEATURES;
  readonly menuOpen = signal(false);
  readonly roles: { value: Role; label: string }[] = [
    { value: 'alumno', label: 'Alumno' }, { value: 'profesor', label: 'Profesor' },
{ value: 'admin', label: 'Admin' }
  ];
  constructor(readonly roleContext: RoleContextService) {}
  setRole(event: Event) { this.roleContext.role.set((event.target as HTMLSelectElement).value as Role); }
}
