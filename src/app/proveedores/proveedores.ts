import { Component, inject } from '@angular/core';
import { TiendaService } from '../tienda';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // OJO AQUÍ: Si tu archivo HTML de esta carpeta se llama proveedores.component.html, agrégale el .component
  templateUrl: './proveedores.html',
})
export class ProveedoresComponent {
  servicio = inject(TiendaService);

  // Traemos el Signal de proveedores
  misProveedores = this.servicio.listaProveedores;

  // Variables del formulario
  nombreNuevo = '';
  telefonoNuevo = '';
  idEditando: number | null = null; // Para saber si estamos creando o editando

  guardar() {
    // Verificamos que no envíen campos vacíos
    if (this.nombreNuevo.trim() !== '' && this.telefonoNuevo.trim() !== '') {
      const datos = { nombre: this.nombreNuevo, telefono: this.telefonoNuevo };

      if (this.idEditando) {
        this.servicio.actualizarProveedor(this.idEditando, datos); // EDITAR
      } else {
        this.servicio.agregarProveedor(datos); // CREAR
      }
      this.limpiar();
    }
  }

  // Cuando le dan clic al botón "Editar" de la tabla
  prepararEdicion(prov: any) {
    this.idEditando = prov.id;
    this.nombreNuevo = prov.nombre;
    this.telefonoNuevo = prov.telefono;
  }

  eliminar(id: number | undefined) {
    if (id) this.servicio.borrarProveedor(id);
  }

  limpiar() {
    this.idEditando = null;
    this.nombreNuevo = '';
    this.telefonoNuevo = '';
  }
}
