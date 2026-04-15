import { Component, inject } from '@angular/core';
import { TiendaService } from '../tienda';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Vital para leer los cuadros de texto

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
})
export class CategoriasComponent {
  // Llamamos al gerente (el servicio)
  servicio = inject(TiendaService);

  // Traemos el Signal del servicio para mostrarlo aquí
  misCategorias = this.servicio.listaCategorias;

  // Variable para guardar lo que escribimos en el teclado
  nombreNuevo = '';

  // Función del botón "Guardar"
  guardar() {
    if (this.nombreNuevo !== '') {
      this.servicio.agregarCategoria(this.nombreNuevo);
      this.nombreNuevo = ''; // Limpiamos el texto después de guardar
    }
  }

  // Función del botón "Eliminar"
  eliminar(id: number | undefined) {
    if (id) {
      this.servicio.borrarCategoria(id);
    }
  }
}
