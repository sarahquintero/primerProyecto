import { Injectable } from '@angular/core';
import { Paciente } from '../modelos/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes: Paciente[] = [];

  registrarPaciente(paciente: Paciente): string {
    if (!paciente.tipoIdentificacion || !paciente.nombres || !paciente.apellidos) {
      return '⚠️ Debe ingresar identificación, nombres y apellidos';
    }
    this.pacientes.push(paciente);
    return '✅ Paciente registrado con éxito';
  }

  listarPacientes(): Paciente[] {
    return this.pacientes;
  }
}
