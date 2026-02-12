import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
  { path: '' , redirectTo: 'Main', pathMatch: 'full' },
  { path: 'Main', component: MainPage },
];
