import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes/pacientes';
import { MedicosComponent } from './medicos/medicos';
import { CitasComponent } from './citas/citas';
import { EspecialidadesComponent } from './especialidades/especialidades';


@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CitasComponent,
    PacientesComponent,
    MedicosComponent,
    EspecialidadesComponent,
    FormsModule
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('primerProyecto');
}
