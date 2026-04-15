import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias';
import { ProveedoresComponent } from './proveedores/proveedores';
import { ProductosComponent } from './productos/productos';

export const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
];
