import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias';

export const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: '', redirectTo: '/categorias', pathMatch: 'full' },
];
