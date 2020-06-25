import { NgModule } from '@angular/core';
import { GlxSessionModule } from '../../services/session/session.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlxTokenInterceptor } from './token.interceptor';

@NgModule({
  imports: [
    GlxSessionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlxTokenInterceptor,
      multi: true
    }
  ]
})
export class GlxTokenInterceptorModule { }
