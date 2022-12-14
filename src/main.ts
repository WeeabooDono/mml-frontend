import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from '@env';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { ROUTES } from 'src/app/app.routing';
import { AppTitleStrategyService } from '@core/title/app-title-strategy.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: TitleStrategy, useClass: AppTitleStrategyService },
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(ROUTES),
    ]),
  ],
}).catch(err => console.error(err));
