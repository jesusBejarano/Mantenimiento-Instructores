import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { Instructor } from '../../models/instructor.model';
import { finalize } from 'rxjs/operators';
import { InstructorRequest } from '@galaxy/commons/models';
import { Router } from '@angular/router';
import { GlxInstructorsHttp } from '@galaxy/commons/http/instructor/instructors.http';

@Injectable()
export class InstructorCreatePresenter {

  instructors: Instructor[] = [];

  constructor(
    private instructorsHttp: GlxInstructorsHttp,
    private dialog: MatDialog,
    private router: Router
  ) {
  }



  createInstructor(body: InstructorRequest) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.instructorsHttp.create(body)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => this.goInstructors());
  }

  goInstructors() {
    this.router.navigateByUrl('/administrador/instructores');
  }
}
