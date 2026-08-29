import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { getFeature } from '../../core/data/platform-catalog';
import { RoleContextService } from '../../core/services/role-context.service';
import { IconComponent } from '../../shared/icon/icon.component';
import { MockCanvasComponent } from '../../shared/mock-canvas/mock-canvas.component';

@Component({selector:'app-feature-workspace',imports:[RouterLink,IconComponent,MockCanvasComponent],templateUrl:'./feature-workspace.component.html'})
export class FeatureWorkspaceComponent {
  private readonly route=inject(ActivatedRoute);
  readonly roleContext=inject(RoleContextService);
  readonly feature=getFeature(this.route.snapshot.data['featureId'])!;
  readonly selectedId=signal(this.feature.screens[0].id);
  readonly visibleScreens=computed(()=>this.feature.screens.filter(screen=>this.roleContext.role()==='admin' || screen.roles.includes(this.roleContext.role())));
  readonly selectedScreen=computed(()=>this.visibleScreens().find(screen=>screen.id===this.selectedId()) ?? this.visibleScreens()[0] ?? this.feature.screens[0]);
  select(id:string){this.selectedId.set(id);document.querySelector('.preview-column')?.scrollIntoView({behavior:'smooth',block:'start'});}
}
