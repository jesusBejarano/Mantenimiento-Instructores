import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { PortalCommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [
    PortalComponent,
    WorkshopsComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule
  ]
})
export class PortalModule { }
