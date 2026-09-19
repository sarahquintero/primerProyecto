import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Medico } from '../modelos/medico.model';
import { MedicoService } from '../servicios/medico';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './medicos.html',
  styleUrls: ['./medicos.css']
})
export class MedicosComponent {
  medico: Medico = {
    id: 0,
    nombre: '',
    apellido: '',
    especialidad: '',
    horarioAtencion: '',
    aniosExperiencia: 0,
    bibliografia: ''
  };

  mensajeMedico: string = '';

  constructor(private medicoService: MedicoService) {}

  registrarMedico() {
    this.mensajeMedico = this.medicoService.registrarMedico(this.medico);
    // Reiniciar formulario
    this.medico = {
      id: 0,
      nombre: '',
      apellido: '',
      especialidad: '',
      horarioAtencion: '',
      aniosExperiencia: 0,
      bibliografia: ''
    };
  }

  listarMedicos(): Medico[] {
    return this.medicoService.listarMedicos();
  }
}
