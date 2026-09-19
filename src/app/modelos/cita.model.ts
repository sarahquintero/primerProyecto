import { Paciente } from './paciente.model';
import { Medico } from './medico.model';

export class Cita {
  constructor(
    public fecha: string,
    public horaInicio: string,
    public horaFin: string,
    public paciente: Paciente | null,
    public medico: Medico | null
  ) {}
}
