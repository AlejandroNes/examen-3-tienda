import Dexie, { Table } from 'dexie';

export interface Categoria {
  id?: number;
  nombre: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  categoriaId: number;
}

export class MiBaseDeDatos extends Dexie {
  categorias!: Table<Categoria, number>;
  productos!: Table<Producto, number>;

  constructor() {
    super('TiendaDB');

    this.version(1).stores({
      categorias: '++id, nombre',
      productos: '++id, nombre, precio, categoriaId',
    });
  }
}

export const db = new MiBaseDeDatos();
