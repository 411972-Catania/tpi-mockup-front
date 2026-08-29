import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getTableMock } from '../../core/data/table-mock-catalog';
import { RoleContextService } from '../../core/services/role-context.service';
import { FeatureDefinition, ScreenDefinition } from '../../core/models/feature.model';
import { IconComponent } from '../icon/icon.component';

@Component({selector:'app-mock-canvas',imports:[IconComponent, RouterLink],templateUrl:'./mock-canvas.component.html'})
export class MockCanvasComponent {
  readonly roleContext=inject(RoleContextService);
  readonly feature=input.required<FeatureDefinition>();
  readonly screen=input.required<ScreenDefinition>();
  readonly tableMock = computed(() => getTableMock(this.feature().id, this.screen().id));
}
