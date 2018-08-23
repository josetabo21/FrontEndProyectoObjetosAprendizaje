import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    const ruta = ['/home'];
    this.router.navigate(ruta);
  }

}
