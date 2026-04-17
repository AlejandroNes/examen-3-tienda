import { Component, inject } from '@angular/core';
import { TiendaService } from '../tienda'; // Asegúrate de que esta ruta llegue a tu servicio
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proveedores.html',
})
export class ProveedoresComponent {
  // 1. Llamamos a nuestro servicio (el gerente)
  servicio = inject(TiendaService);

  // 2. Traemos la lista de proveedores
  misProveedores = this.servicio.listaProveedores;

  // 3. Variables para nuestro formulario
  nombreNuevo = '';
  telefonoNuevo = '';
  idEditando: number | null = null; // Nos avisa si estamos creando o editando

  // 4. Función para guardar o actualizar
  guardar() {
    // Verificamos que no nos manden campos vacíos
    if (this.nombreNuevo.trim() !== '' && this.telefonoNuevo.trim() !== '') {
      const datos = {
        nombre: this.nombreNuevo,
        telefono: this.telefonoNuevo,
      };

      if (this.idEditando) {
        this.servicio.actualizarProveedor(this.idEditando, datos); // Si hay ID, edita
      } else {
        this.servicio.agregarProveedor(datos); // Si no hay ID, crea uno nuevo
      }

      this.limpiar(); // Dejamos el formulario en blanco al terminar
    }
  }

  // 5. Prepara el formulario cuando tocamos el botón "Editar" en la tabla
  prepararEdicion(prov: any) {
    this.idEditando = prov.id;
    this.nombreNuevo = prov.nombre;
    this.telefonoNuevo = prov.telefono;
  }

  // 6. Función para borrar
  eliminar(id: number | undefined) {
    if (id) {
      this.servicio.borrarProveedor(id);
    }
  }

  // 7. Función para vaciar las cajas de texto
  limpiar() {
    this.idEditando = null;
    this.nombreNuevo = '';
    this.telefonoNuevo = '';
  }
}
