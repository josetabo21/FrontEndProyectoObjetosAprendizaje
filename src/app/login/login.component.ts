import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  login() {
    const ruta = ['/home'];
    this.router.navigate(ruta);
  }

  resgistrarEstudiante() {
    const ruta = ['/registroEstudiantes'];
    this.router.navigate(ruta);
  }
}
