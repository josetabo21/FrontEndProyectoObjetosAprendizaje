import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RegistrarEstudianteComponent } from './registrar-estudiante/registrar-estudiante.component';
import { GestionarProfesoresComponent } from './gestionar-profesores/gestionar-profesores.component';
import { GestionarEstudiantesComponent } from './gestionar-estudiantes/gestionar-estudiantes.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { ImportarComponent } from './importar/importar.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    RegistrarEstudianteComponent,
    GestionarProfesoresComponent,
    GestionarEstudiantesComponent,
    HerramientasComponent,
    ImportarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
