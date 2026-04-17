import { Component, inject } from '@angular/core';
import { TiendaService } from '../tienda';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
})
export class CategoriasComponent {
  servicio = inject(TiendaService);

  misCategorias = this.servicio.listaCategorias;

  nombreNuevo = '';

  guardar() {
    if (this.nombreNuevo !== '') {
      this.servicio.agregarCategoria({ nombre: this.nombreNuevo });

      this.nombreNuevo = '';
    }
  }

  eliminar(id: number | undefined) {
    if (id) {
      this.servicio.borrarCategoria(id);
    }
  }
}
