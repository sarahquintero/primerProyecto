import { Injectable } from '@angular/core';
import { Medico } from '../modelos/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private medicos: Medico[] = [];

  registrarMedico(medico: Medico): string {
    if (!medico.nombre || !medico.especialidad) {
      return '⚠️ Debe ingresar nombre y especialidad';
    }
    this.medicos.push(medico);
    return '✅ Médico registrado con éxito';
  }

  listarMedicos(): Medico[] {
    return this.medicos;
  }
}
