// citas.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PacienteService } from '../servicios/paciente';
import { MedicoService } from '../servicios/medico';
import { CitaService } from '../servicios/cita';
import { Paciente } from '../modelos/paciente.model';
import { Medico } from '../modelos/medico.model';
import { Cita } from '../modelos/cita.model';
import { validarHoras } from '../utils/validacion';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './citas.html',
  styleUrls: ['./citas.css']
})


export class CitasComponent {
  cita: Cita = {
    fecha: '',
    horaInicio: '',
    horaFin: '',
    paciente: null,
    medico: null
  };

  mensajeCita: string = '';

  constructor(
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private citaService: CitaService
  ) { }

  listarPacientes(): Paciente[] {
    return this.pacienteService.listarPacientes();
  }

  listarMedicos(): Medico[] {
    return this.medicoService.listarMedicos();
  }

  listarCitas(): Cita[] {
    return this.citaService.listarCitas();
  }

  registrarCita() {
    const errorHoras = validarHoras(this.cita.horaInicio, this.cita.horaFin);
    if (errorHoras) {
      this.mensajeCita = errorHoras;
      return;
    }

    if (!this.cita.paciente || !this.cita.medico) {
      this.mensajeCita = 'Debe seleccionar paciente y médico';
      return;
    }
    this.mensajeCita = this.citaService.registrarCita({ ...this.cita });
  }

  eliminarCita(index: number) {
    this.citaService.eliminarCita(index);
  }
}
