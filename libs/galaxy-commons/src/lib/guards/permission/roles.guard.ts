import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { GlxPermissionGuardModule } from './permission.module';
import { GlxSession } from '../../services/session/session.service';

@Injectable({
  providedIn: GlxPermissionGuardModule
})
export class GlxRolesGuard implements CanActivate {

  constructor(
    private session: GlxSession,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const roles = next.data.roles;
    const rol = this.session.user.rol;

    return roles.includes(rol) || this.router.parseUrl(this.session.user.startUrl);
  }
}
