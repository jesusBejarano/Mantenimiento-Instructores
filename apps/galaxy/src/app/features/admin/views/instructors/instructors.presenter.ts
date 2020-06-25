import { Injectable } from '@angular/core';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { deleteElementList } from '@galaxy/commons/utils';
import { DialogDeleteModalComponent } from '../../commons/components/dialog-delete-modal/dialog-delete-modal.component';
import { GlxInstructorsHttp } from '@galaxy/commons/http/instructor/instructors.http';

@Injectable()
export class InstructorsPresenter {
  dataSource = [];

  constructor(
    private InstructorsHttp: GlxInstructorsHttp,
    private dialog: MatDialog,
    private router: Router) { }

  loadInstructors() {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.InstructorsHttp.getAll()
    .pipe(finalize(() => loading.close()))
    .subscribe(Instructors => this.dataSource = Instructors);
  }

  deleteInstructors(InstructorsId: string) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.InstructorsHttp.delete(InstructorsId)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => {
      this.dataSource = deleteElementList(this.dataSource, Instructors => Instructors.id === InstructorsId);
    });
  }

  goCreatePage() {
    this.router.navigateByUrl('/administrador/instructores/nuevo');
  }

  goUpdatePage(InstructorsId: string) {
    this.router.navigate(['/administrador/instructores/actualizar', InstructorsId]);
  }
  goInstructors() {
    this.router.navigateByUrl('/administrador/instructores');
  }

  goDeleteModal(InstructorsId: string) {
    const modal = this.dialog.open(DialogDeleteModalComponent, { disableClose: true });
    modal.afterClosed().subscribe((remove: boolean) => {
      if (remove) { this.deleteInstructors(InstructorsId); }
    });
  }
}
