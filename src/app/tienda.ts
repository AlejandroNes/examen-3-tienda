import { Injectable, signal } from '@angular/core';
import { db, Categoria, Producto, Proveedor } from './base-datos';

@Injectable({ providedIn: 'root' })
export class TiendaService {
  listaCategorias = signal<Categoria[]>([]);
  listaProveedores = signal<Proveedor[]>([]);
  listaProductos = signal<Producto[]>([]);

  constructor() {
    this.refrescarDatos();
  }

  async refrescarDatos() {
    if (!db) return;
    this.listaCategorias.set(await db.categorias.toArray());
    this.listaProveedores.set(await db.proveedores.toArray());
    this.listaProductos.set(await db.productos.toArray());
  }

  // CRUD CATEGORÍAS
  async agregarCategoria(datos: Categoria) {
    await db.categorias.add(datos);
    this.refrescarDatos();
  }
  async actualizarCategoria(id: number, datos: Categoria) {
    await db.categorias.update(id, datos);
    this.refrescarDatos();
  }
  async borrarCategoria(id: number) {
    await db.categorias.delete(id);
    this.refrescarDatos();
  }

  //CRUD PROVEEDORES
  async agregarProveedor(datos: Proveedor) {
    await db.proveedores.add(datos);
    this.refrescarDatos();
  }
  async actualizarProveedor(id: number, datos: Proveedor) {
    await db.proveedores.update(id, datos);
    this.refrescarDatos();
  }
  async borrarProveedor(id: number) {
    await db.proveedores.delete(id);
    this.refrescarDatos();
  }

  // CRUD PRODUCTOS
  async agregarProducto(datos: Producto) {
    await db.productos.add(datos);
    this.refrescarDatos();
  }
  async actualizarProducto(id: number, datos: Producto) {
    await db.productos.update(id, datos);
    this.refrescarDatos();
  }
  async borrarProducto(id: number) {
    await db.productos.delete(id);
    this.refrescarDatos();
  }
}
