import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})

export class HeaderComponent {
  public nombres: String = "Juan";
  public apellidos: String = "Perez";
  public disciplina: String = "Soy desarrollador BackEnd especialista en node.js y en Experiencia de usuario";
  public descripcion: String = "Estudiante de Ingeniería de sistemas apasionado por el desarrollo BackEnd";
}
