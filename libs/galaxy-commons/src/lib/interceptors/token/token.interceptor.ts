import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlxSession } from '../../services/session/session.service';

@Injectable()
export class GlxTokenInterceptor implements HttpInterceptor {

  constructor( private session: GlxSession ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.session.isAuthenticated) {
      const headers = {
        Authorization: `Bearer ${this.session.token}`
      };

      const req = request.clone({
        setHeaders: headers
      });

      return next.handle(req);
    }

    return next.handle(request);
  }
}
