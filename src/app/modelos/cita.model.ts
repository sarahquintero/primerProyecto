import { Paciente } from './paciente.model';
import { Medico } from './medico.model';

export interface Cita {
  fecha: string;
  horaInicio: string;
  horaFin: string;
  paciente: Paciente;
  medico: Medico; 
}
