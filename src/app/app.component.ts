import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
}
