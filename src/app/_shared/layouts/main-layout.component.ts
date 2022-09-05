import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '@core/theme/theme.service';
import { Menu, Menus } from '@shared/navigation/menu.model';
import { SideMenuComponent } from '@shared/layouts/side-menu/side-menu.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    SideMenuComponent,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    CommonModule,
  ],
})
export class MainLayoutComponent implements AfterViewInit {

  @ViewChild('drawer', { static: true })
  public drawer!: MatSidenav;

  @ViewChild('container')
  public container!: ElementRef;

  @ViewChild('sideMenu', { read: ElementRef })
  public sideMenu: ElementRef | undefined;

  private sideMenuExpanded: boolean = true;

  public checked = false;
  public menus: Menu[] = Menus;

  public isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(map(result => result.matches));

  constructor(private readonly breakpointObserver: BreakpointObserver,
              private readonly cd: ChangeDetectorRef,
              private readonly renderer: Renderer2,
              private readonly themeService: ThemeService) {
    this.checked = this.themeService.isDarkTheme;
  }

  public ngAfterViewInit(): void {
    this.setStyles();
    this.isMobile$.subscribe(isMobile => {
      if (isMobile) {
        this.renderer.removeStyle(this.container.nativeElement, 'padding-left');
      }
    });
  }

  public switchMode({ checked }: MatSlideToggleChange): void {
    this.themeService.switchTheme(checked);
  }

  public toggleDrawer(): void {
    this.isMobile$.subscribe(isMobile => {
      if (isMobile) {
        this.drawer.toggle();
      }
      this.toggleSideMenu();
    });
  }

  private toggleSideMenu(): void {
    if (!this.sideMenu) {
      return;
    }
    this.sideMenuExpanded = !this.sideMenuExpanded;
    this.setStyles();
  }

  private setStyles(): void {
    if (!this.sideMenu) {
      return;
    }
    const width = this.sideMenuExpanded ? 200 : 80;

    this.renderer.setStyle(this.sideMenu.nativeElement.children[0], 'width', `${ width }px`);
    this.renderer.setStyle(this.container.nativeElement, 'padding-left', `${ width }px`);
    this.cd.detectChanges();
  }
}
