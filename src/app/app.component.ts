import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from '@core/theme/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
  ],
})
export class AppComponent {

  constructor(private readonly themeService: ThemeService) {
    this.themeService.init();
  }
}
