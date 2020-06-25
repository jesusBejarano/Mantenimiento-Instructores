import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { UiModule } from '../ui/ui.module';
import { GlxButtonVisibilyPasswordModule } from '@galaxy/commons/components';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SignInFormComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    UiModule,
    GlxButtonVisibilyPasswordModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
