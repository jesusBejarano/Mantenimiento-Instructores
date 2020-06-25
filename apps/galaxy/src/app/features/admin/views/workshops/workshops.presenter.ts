import { Injectable } from '@angular/core';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { deleteElementList } from '@galaxy/commons/utils';
import { DialogDeleteModalComponent } from '../../commons/components/dialog-delete-modal/dialog-delete-modal.component';

@Injectable()
export class WorkshopsPresenter {
  dataSource = [];

  constructor(
    private workshopsHttp: GlxWorkshopsHttp,
    private dialog: MatDialog,
    private router: Router
  ) {}

  loadWorkshops() {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.workshopsHttp.getAll()
    .pipe(finalize(() => loading.close()))
    .subscribe(workshops => this.dataSource = workshops);
  }

  deleteWorkshop(workshopId: string) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.workshopsHttp.delete(workshopId)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => {
      this.dataSource = deleteElementList(this.dataSource, workshop => workshop.id === workshopId);
    });
  }

  goCreatePage() {
    this.router.navigateByUrl('/administrador/talleres/nuevo');
  }

  goUpdatePage(workshopId: string) {
    this.router.navigate(['/administrador/talleres/actualizar', workshopId]);
  }

  goDeleteModal(workshopId: string) {
    const modal = this.dialog.open(DialogDeleteModalComponent, { disableClose: true });
    modal.afterClosed().subscribe((remove: boolean) => {
      if (remove) { this.deleteWorkshop(workshopId); }
    });
  }
}
