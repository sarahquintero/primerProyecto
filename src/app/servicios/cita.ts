// cita.service.ts
import { Injectable } from '@angular/core';
import { Cita } from '../modelos/cita.model';

@Injectable({ providedIn: 'root' })
export class CitaService {
  private citas: Cita[] = [
    {
      fecha: '2026-09-19',
      horaInicio: '10:00',
      horaFin: '11:00',
      paciente: {
        id: 1,
        nombres: 'Ana',
        apellidos: 'Gómez',
        tipoIdentificacion: 'CC',
        identificacion: '123456789',
        fechaNacimiento: '2000-01-01',
        correo: 'ana@example.com',
        genero: 'F'
      },
      medico: {
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        especialidad: 'Terapia Neural',
        horarioAtencion: 'Lunes a Viernes 8am-4pm',
        aniosExperiencia: 10,
        bibliografia: 'Especialista en terapia neural con amplia experiencia.'
      }
    }
  ];


  registrarCita(cita: Cita): string {
    if (!cita.paciente || !cita.medico) {
      return '⚠️ Debe seleccionar paciente y médico';
    }

    this.citas.push(cita);
    return '✅ Cita registrada con éxito';
  }

  listarCitas(): Cita[] {
    return this.citas;
  }

  eliminarCita(index: number): void {
    this.citas.splice(index, 1);
  }
}
