import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { finalize } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

import { GlxInstructorsHttp } from '@galaxy/commons/http/instructor/instructors.http';
import { InstructorRequest, Instructor } from '@galaxy/commons/models';

@Injectable()
export class InstructorUpdatePresenter {

  instructors: Instructor[] = [];
  instructor: Instructor;
  instructorId: string;

  constructor(
    private instructorHttp: GlxInstructorsHttp,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  initial() {
    this.instructorId = this.route.snapshot.paramMap.get('id');

    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });

  this.instructorHttp.getOne(this.instructorId)
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ( instructor ) => {
        this.instructor = instructor;
      },
      (err) => {
        console.log(err);
      }
    );
    /*
    forkJoin([
      this.instructorsHttp.getAll(),
      this.workshopsHttp.getOne(workshopId)
    ])
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ([ instructors, workshop ]) => {
        this.instructors = instructors;
        this.workshop = workshop;
      }
    );
    */

  }


  updateInstructor(body: InstructorRequest) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.instructorHttp.update(this.instructorId, body)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => this.goInstructors());
  }



  goInstructors() {
    this.router.navigateByUrl('/administrador/instructores');
  }
}
