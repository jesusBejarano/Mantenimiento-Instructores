import { Injectable } from '@angular/core';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { Instructor } from '../../models/instructor.model';
import { finalize } from 'rxjs/operators';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { WorkshopRequest } from '@galaxy/commons/models';
import { Router } from '@angular/router';

@Injectable()
export class WorkshopCreatePresenter {

  instructors: Instructor[] = [];

  constructor(
    private instructorsHttp: InstructorsHttp,
    private workshopsHttp: GlxWorkshopsHttp,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  loadInstructors() {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.instructorsHttp.getAll()
    .pipe(finalize(() => loading.close()))
    .subscribe(instructors => this.instructors = instructors);
  }

  createWorkshop(body: WorkshopRequest) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.workshopsHttp.create(body)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => this.goWorkshops());
  }

  goWorkshops() {
    this.router.navigateByUrl('/administrador/talleres');
  }
}
