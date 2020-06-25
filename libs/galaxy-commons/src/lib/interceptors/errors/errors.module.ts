import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlxErrorsInterceptor } from './errors.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlxErrorsInterceptor,
      multi: true
    }
  ],
  imports: [
    MatSnackBarModule
  ]
})
export class GlxErrorsInterceptorModule { }
