import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitaService } from '../servicios/cita';
import { Paciente } from '../modelos/paciente.model';
import { Medico } from '../modelos/medico.model';
import { Cita } from '../modelos/cita.model';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './citas.html',
  styleUrls: ['./citas.css']
})
export class CitasComponent {
  pacientes: Paciente[] = [
    { id: 1, nombres: 'Ana', apellidos: 'García', tipoIdentificacion: 'CC', identificacion: '123456', fechaNacimiento: new Date('1990-01-01'), genero: 'Femenino', correo: 'ana.garcia@example.com' },
    { id: 2, nombres: 'Luis', apellidos: 'Martínez', tipoIdentificacion: 'CC', identificacion: '654321', fechaNacimiento: new Date('1985-05-10'), genero: 'Masculino', correo: 'luis.martinez@example.com' }
  ];

medicos: Medico[] = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    especialidad: 'Fisioterapia',
    horarioAtencion: 'Lunes a Viernes 8am-4pm',
    aniosExperiencia: 10,
    bibliografia: 'Especialista en rehabilitación física con amplia experiencia en pacientes deportivos.'
  },
  {
    id: 2,
    nombre: 'Catalina',
    apellido: 'Sánchez',
    especialidad: 'Nutrición',
    horarioAtencion: 'Martes a Sábado 9am-5pm',
    aniosExperiencia: 8,
    bibliografia: 'Nutricionista enfocada en dietas personalizadas y control metabólico.'
  }
];


  cita: Cita = { fecha: '', horaInicio: '', horaFin: '', paciente: null!, medico: null! };
  mensajeCita: string = '';

  constructor(private citaService: CitaService) {}

  registrarCita() {
    this.mensajeCita = this.citaService.registrarCita(this.cita);
  }

  listarPacientes(): Paciente[] {
    return this.pacientes;
  }

  listarMedicos(): Medico[] {
    return this.medicos;
  }
}
