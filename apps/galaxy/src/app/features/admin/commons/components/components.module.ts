import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { InstructorsTableComponent } from './instructors-table/instructors-table.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { WorkshopFormComponent } from './workshop-form/workshop-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WorkshopUploadPosterComponent } from './workshop-upload-poster/workshop-upload-poster.component';
import { GlxDefaultImgPipeModule } from '@galaxy/commons/pipe';
import { GlxInputFileModule } from '@galaxy/commons/components';
import { DialogDeleteModalComponent } from './dialog-delete-modal/dialog-delete-modal.component';
import { WorkshopsTableComponent } from './workshops-table/workshops-table.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';

const COMPONENTS = [
  MenuComponent,
  WorkshopsTableComponent,
  InstructorsTableComponent,
  PageTitleComponent,
  WorkshopFormComponent,
  InstructorFormComponent,
  DialogDeleteModalComponent,
  WorkshopUploadPosterComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    GlxDefaultImgPipeModule,
    GlxInputFileModule
  ]
})
export class ComponentsModule { }
