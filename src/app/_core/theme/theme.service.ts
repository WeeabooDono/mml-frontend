import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { THEME_STORAGE_KEY, ThemeClassName } from '@core/theme/theme.utils';
import { DOCUMENT } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private renderer: Renderer2;

  get isDarkTheme(): boolean {
    return coerceBooleanProperty(localStorage.getItem(THEME_STORAGE_KEY)) ?? false;
  }

  constructor(@Inject(DOCUMENT)
              private readonly document: Document,
              private readonly rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public init(): void {
    this.switchTheme(this.isDarkTheme);
  }

  public switchTheme(isDarkTheme: boolean): void {
    localStorage.setItem(THEME_STORAGE_KEY, String(isDarkTheme));

    this.renderer.removeClass(this.document.body, ThemeService.getTheme(!isDarkTheme));
    this.renderer.addClass(this.document.body, ThemeService.getTheme(isDarkTheme));
  }

  private static getTheme(isDarkTheme: boolean): ThemeClassName {
    return isDarkTheme ? 'main-dark-theme' : 'main-light-theme';
  }
}
