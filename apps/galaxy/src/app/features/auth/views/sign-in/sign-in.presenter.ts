import { Injectable } from '@angular/core';
import { AuthHttp } from '../../commons/http/auth.http';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { SignInCredentials } from '../../interfaces/sign-in-credentials.interface';
import { finalize } from 'rxjs/operators';
import { GlxSession } from '@galaxy/commons/services';
import { Router } from '@angular/router';

@Injectable()
export class SignInPresenter {

  constructor(
    private authHttp: AuthHttp,
    private dialog: MatDialog,
    private session: GlxSession,
    private router: Router
  ) {}

  signIn(credentials: SignInCredentials) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.authHttp.signIn(credentials)
    .pipe(finalize(() => loading.close()))
    .subscribe(
      res => {
        this.session.create(res.token);
        this.router.navigateByUrl(this.session.user.startUrl);
      }
    );
  }

}
