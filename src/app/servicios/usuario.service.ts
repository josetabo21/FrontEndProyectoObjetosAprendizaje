import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

  userUrl = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) { }

  addUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.userUrl, usuario, httpOptions);
  }
}
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  export interface Usuario {
    tipoUsuario: String;
    usuario: String;
    contrasenia: string;
    activo: boolean;

  }


