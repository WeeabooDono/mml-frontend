import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(({ HomeComponent }) => HomeComponent),
    title: 'Home'
  },
];
