import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [];

  ngOnInit() {
    this.clientes = [
      {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juan@unicauca.edu.co', createAt: '2021-05-14'},
      {id: 2, nombre: 'Andres', apellido: 'Sanchez', email: 'andres@unicauca.edu.co', createAt: '2022-06-14'},
      {id: 3, nombre: 'Pedro', apellido: 'Cortez', email: 'pedro@unicauca.edu.co', createAt: '2018-02-14'}
    ];
  }
}
