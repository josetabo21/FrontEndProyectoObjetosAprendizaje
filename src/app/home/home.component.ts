import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gestionarProfesores() {
    const ruta = ['/gestionProfesores'];
    this.router.navigate(ruta);
  }
  gestionarEstudiantes() {
    const ruta = ['/gestionEstudiantes'];
    this.router.navigate(ruta);
  }
  herramientas() {
    const ruta = ['/herramientas'];
    this.router.navigate(ruta);
  }

  crearOA() {
    const ruta = ['/crearOA'];
    this.router.navigate(ruta);
  }
  importar() {
    const ruta = ['/importar'];
    this.router.navigate(ruta);
  }
}
