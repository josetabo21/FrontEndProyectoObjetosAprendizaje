import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegistrarEstudianteComponent } from './registrar-estudiante/registrar-estudiante.component';
import { GestionarProfesoresComponent } from './gestionar-profesores/gestionar-profesores.component';
import { GestionarEstudiantesComponent } from './gestionar-estudiantes/gestionar-estudiantes.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { ImportarComponent } from './importar/importar.component';



export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registroEstudiantes', component: RegistrarEstudianteComponent},
    {path: 'gestionProfesores', component: GestionarProfesoresComponent},
    {path: 'gestionEstudiantes', component: GestionarEstudiantesComponent},
    {path: 'herramientas', component: HerramientasComponent},
    {path: 'importar', component: ImportarComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
