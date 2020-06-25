import { Injectable } from '@angular/core';
import { GlxThemeModule } from '@galaxy/commons/theme/theme.module';

@Injectable({
  providedIn: GlxThemeModule
})
export class GlxThemeService {
  private isDark = false;

  get theme() {
    return this.isDark ? 'dark-theme' : '';
  }

  setLightTheme() {
      this.isDark = false;
  }

  setDarkTheme() {
      this.isDark = true;
  }

}
