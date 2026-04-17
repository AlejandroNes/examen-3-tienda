import { Component, inject } from '@angular/core';
import { TiendaService } from '../tienda';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proveedores.html',
})
export class ProveedoresComponent {
  servicio = inject(TiendaService);
  misProveedores = this.servicio.listaProveedores;
  nombreNuevo = '';
  telefonoNuevo = '';
  idEditando: number | null = null;
  guardar() {
    
    if (this.nombreNuevo.trim() !== '' && this.telefonoNuevo.trim() !== '') {
      const datos = {
        nombre: this.nombreNuevo,
        telefono: this.telefonoNuevo,
      };

      if (this.idEditando) {
        this.servicio.actualizarProveedor(this.idEditando, datos); 
      } else {
        this.servicio.agregarProveedor(datos);
      }

      this.limpiar(); 
    }
  }

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

  limpiar() {
    this.idEditando = null;
    this.nombreNuevo = '';
    this.telefonoNuevo = '';
  }
}
