import { Routes } from '@angular/router';
import { MainLayoutOutletComponent } from '@shared/outlets/main-layout-outlet.component';
import { HomeComponent } from 'src/app/home/home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutOutletComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
];
