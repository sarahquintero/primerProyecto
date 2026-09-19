import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './especialidades.html',
  styleUrls: ['./especialidades.css']
})
export class EspecialidadesComponent {
  especialidadSeleccionada: string = '';

  seleccionarEspecialidad(especialidad: string) {
    this.especialidadSeleccionada = especialidad;
  }
}
