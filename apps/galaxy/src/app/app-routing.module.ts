import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlxAuthenticatedGuard, GlxRolesGuard } from '@galaxy/commons/guards';
import { UserRol } from '@galaxy/commons/models';

const routes: Routes = [
  { path: '', redirectTo: 'talleres', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: 'administrador',
    canActivate: [GlxAuthenticatedGuard, GlxRolesGuard],
    data: { roles: [ UserRol.admin, UserRol.intructor ] },
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
