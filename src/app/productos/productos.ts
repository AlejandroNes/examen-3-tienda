import { Component, inject } from '@angular/core';
import { TiendaService } from '../tienda';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
})
export class ProductosComponent {
  servicio = inject(TiendaService);

  productos = this.servicio.listaProductos;
  categorias = this.servicio.listaCategorias;
  proveedores = this.servicio.listaProveedores;

  idEditando: number | null = null;
  nombreNuevo = '';
  precioNuevo = 0;
  categoriaIdSeleccionada = 0;
  proveedorIdSeleccionado = 0;

  guardar() {
    const datos = {
      nombre: this.nombreNuevo,
      precio: this.precioNuevo,
      categoriaId: Number(this.categoriaIdSeleccionada),
      proveedorId: Number(this.proveedorIdSeleccionado),
    };

    if (this.idEditando) {
      this.servicio.actualizarProducto(this.idEditando, datos);
    } else {
      this.servicio.agregarProducto(datos);
    }
    this.limpiarFormulario();
  }

  prepararEdicion(producto: any) {
    this.idEditando = producto.id;
    this.nombreNuevo = producto.nombre;
    this.precioNuevo = producto.precio;
    this.categoriaIdSeleccionada = producto.categoriaId;
    this.proveedorIdSeleccionado = producto.proveedorId;
  }

  eliminar(id: number | undefined) {
    if (id) this.servicio.borrarProducto(id);
  }

  limpiarFormulario() {
    this.idEditando = null;
    this.nombreNuevo = '';
    this.precioNuevo = 0;
    this.categoriaIdSeleccionada = 0;
    this.proveedorIdSeleccionado = 0;
  }
}
