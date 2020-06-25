import { Injectable } from '@angular/core';
import { GlxWorkshopsHttp, GlxParticipantHttp } from '@galaxy/commons/http';
import { Workshop } from '@galaxy/commons/models';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlxSession } from '@galaxy/commons/services';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';

@Injectable()
export class WorkshopsPresenter {

    workshops: Workshop[] = [];
    loading = true;

    constructor(
      private workshopsHttp: GlxWorkshopsHttp,
      private participantsHttp: GlxParticipantHttp,
      private session: GlxSession,
      private router: Router,
      private dialog: MatDialog
    ) {}

    loadWorkshops() {
        this.workshopsHttp.getAllPortal()
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          workshops => this.workshops = workshops,
          err => console.log(err)
        );
    }

    joinWorkshop(workshop: Workshop) {
      if (!this.session.isAuthenticated) {
        return this.router.navigateByUrl('/autenticacion/ingresar');
      }

      const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
      this.participantsHttp.register(workshop.id, !workshop.registered)
      .pipe(finalize(() => loading.close()))
      .subscribe(_ => {
        workshop.registered = !workshop.registered;
      });

    }

}
