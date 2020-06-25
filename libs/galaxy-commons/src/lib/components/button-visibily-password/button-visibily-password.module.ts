import { NgModule } from '@angular/core';
import { GlxButtonVisibilyPasswordComponent } from './button-visibily-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GlxButtonVisibilyPasswordComponent],
  exports: [GlxButtonVisibilyPasswordComponent],
  imports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class GlxButtonVisibilyPasswordModule { }
