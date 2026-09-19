import { Injectable } from '@angular/core';
import { Cita } from '../modelos/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citas: Cita[] = [];

  registrarCita(cita: Cita): string {
    if (cita.horaFin <= cita.horaInicio) {
      return 'La hora de fin debe ser mayor que la hora de inicio';
    }
    if (!cita.paciente || !cita.medico) {
      return 'Debe seleccionar paciente y médico';
    }
    this.citas.push(cita);
    return 'Cita registrada con éxito';
  }

  listarCitas(): Cita[] {
    return this.citas;
  }
}
