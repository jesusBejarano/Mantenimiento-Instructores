import { Component } from '@angular/core';

@Component({
  selector: 'glx-button-visibily-password',
  templateUrl: './button-visibily-password.component.html',
  styleUrls: ['./button-visibily-password.component.scss']
})
export class GlxButtonVisibilyPasswordComponent {

  show = false;

  get type() {
    return this.show ? 'text' : 'password';
  }

  get icon() {
    return this.show ? 'visibility_off' : 'visibility';
  }

  toggle() {
    this.show = !this.show;
  }
}
