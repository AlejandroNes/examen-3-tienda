import { Injectable, signal } from '@angular/core';
import { db, Categoria, Producto } from './base-datos';

@Injectable({ providedIn: 'root' })
export class TiendaService {
  listaCategorias = signal<Categoria[]>([]);
  listaProductos = signal<Producto[]>([]);

  constructor() {
    this.refrescarDatos();
  }

  async refrescarDatos() {
    const categoriasGuardadas = await db.categorias.toArray();
    const productosGuardados = await db.productos.toArray();

    this.listaCategorias.set(categoriasGuardadas);
    this.listaProductos.set(productosGuardados);
  }

  async agregarCategoria(nombre: string) {
    await db.categorias.add({ nombre: nombre });
    this.refrescarDatos();
  }

  async borrarCategoria(id: number) {
    await db.categorias.delete(id);
    this.refrescarDatos();
  }

  async agregarProducto(producto: Producto) {
    await db.productos.add(producto);
    this.refrescarDatos();
  }

  async borrarProducto(id: number) {
    await db.productos.delete(id);
    this.refrescarDatos();
  }
}
