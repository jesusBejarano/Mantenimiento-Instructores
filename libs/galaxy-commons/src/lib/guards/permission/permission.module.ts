import { NgModule } from '@angular/core';
import { GlxSessionModule } from '../../services/session/session.module';

@NgModule({
  imports: [
    GlxSessionModule
  ]
})
export class GlxPermissionGuardModule { }
