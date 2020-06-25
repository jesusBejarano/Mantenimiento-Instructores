import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxLoadingComponent } from './loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [GlxLoadingComponent],
  exports: [GlxLoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class GlxLoadingModule { }
