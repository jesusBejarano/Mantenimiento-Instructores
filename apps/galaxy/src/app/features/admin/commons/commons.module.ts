import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { GlxWorkshopsHttpModule } from '@galaxy/commons/http';
import { GlxErrorsInterceptorModule, GlxTokenInterceptorModule } from '@galaxy/commons/interceptors';
import { GlxSessionModule } from '@galaxy/commons/services';
import { GlxInstructorsHttpModule } from '@galaxy/commons/http/instructor/instructors.module';

@NgModule({
  exports: [
    UiModule,
    ComponentsModule,
    HttpModule,

    GlxWorkshopsHttpModule,
    GlxInstructorsHttpModule,
    GlxErrorsInterceptorModule,
    GlxSessionModule,
    GlxTokenInterceptorModule
  ],
})
export class AdminCommonsModule { }
