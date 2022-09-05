import { Routes } from '@angular/router';
import { HOME_ROUTES } from 'src/app/home/home.routing';

export const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routing').then(({ HOME_ROUTES }) => HOME_ROUTES),
    title: 'Home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
