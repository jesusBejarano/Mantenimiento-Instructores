import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { GlxSessionModule } from '@galaxy/commons/services';
import { GlxTokenInterceptorModule } from '@galaxy/commons/interceptors';
import { GlxWorkshopsHttpModule, GlxParticipantHttpModule } from '@galaxy/commons/http';

@NgModule({
    exports: [
        UiModule,
        ComponentsModule,

        GlxWorkshopsHttpModule,
        GlxParticipantHttpModule,
        GlxSessionModule,
        GlxTokenInterceptorModule
    ]
})
export class PortalCommonsModule {}
