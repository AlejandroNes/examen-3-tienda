import Dexie, { Table } from 'dexie';

export interface Categoria {
  id?: number;
  nombre: string;
}

export interface Proveedor {
  id?: number;
  nombre: string;
  telefono: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  categoriaId: number;
  proveedorId: number;
}

export class MiBaseDeDatos extends Dexie {
  categorias!: Table<Categoria, number>;
  proveedores!: Table<Proveedor, number>;
  productos!: Table<Producto, number>;

  constructor() {
    super('TiendaDB');
    this.version(2).stores({
      categorias: '++id, nombre',
      proveedores: '++id, nombre',
      productos: '++id, nombre, precio, categoriaId, proveedorId',
    });
  }
}

export let db: MiBaseDeDatos;
if (typeof window !== 'undefined') {
  db = new MiBaseDeDatos();
}
