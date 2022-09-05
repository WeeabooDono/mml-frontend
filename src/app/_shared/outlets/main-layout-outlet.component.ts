import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MainLayoutComponent } from '@shared/layouts/main-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout-outlet',
  template: `
    <app-main-layout>
      <router-outlet></router-outlet>
    </app-main-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MainLayoutComponent,
    RouterModule,
  ],
})
export class MainLayoutOutletComponent {

}
