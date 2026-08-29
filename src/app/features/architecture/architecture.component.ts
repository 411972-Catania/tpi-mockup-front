import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURES } from '../../core/data/platform-catalog';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({selector:'app-architecture',imports:[RouterLink,IconComponent],templateUrl:'./architecture.component.html'})
export class ArchitectureComponent { readonly features=FEATURES; featureName(id:string){return FEATURES.find(f=>f.id===id)?.shortName ?? id;} }
