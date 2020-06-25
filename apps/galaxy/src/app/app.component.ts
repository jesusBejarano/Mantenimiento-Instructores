import { Component, HostBinding } from '@angular/core';
import { GlxThemeService } from '@galaxy/commons/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class')

  get attrClass() {
    return this.themeService.theme;
  }

  constructor(private themeService: GlxThemeService) {}

}
