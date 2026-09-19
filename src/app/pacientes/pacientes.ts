import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../servicios/paciente';
import { Paciente } from '../modelos/paciente.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.css']
})
export class PacientesComponent {
  paciente: Paciente = { id: 0, nombres: '', apellidos: '', tipoIdentificacion: '', identificacion: '',fechaNacimiento: new Date() , correo: '', genero: ''};
  mensaje: string = '';

  constructor(private pacienteService: PacienteService) {}

  registrarPaciente() {
    this.mensaje = this.pacienteService.registrarPaciente(this.paciente);
  }

  listarPacientes(): Paciente[] {
    return this.pacienteService.listarPacientes();
  }
}
