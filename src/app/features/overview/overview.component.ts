import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURES } from '../../core/data/platform-catalog';
import { RoleContextService } from '../../core/services/role-context.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({selector:'app-overview',imports:[RouterLink,IconComponent],templateUrl:'./overview.component.html'})
export class OverviewComponent {
  readonly features=FEATURES;
  readonly totalScreens=FEATURES.reduce((sum,item)=>sum+item.screens.length,0);
  readonly mvpScreens=FEATURES.flatMap(item=>item.screens).filter(screen=>screen.phase==='MVP').length;
  constructor(readonly roleContext:RoleContextService){}
  visibleCount(id:string){return FEATURES.find(f=>f.id===id)?.screens.filter(s=>s.roles.includes(this.roleContext.role())).length ?? 0;}
}
