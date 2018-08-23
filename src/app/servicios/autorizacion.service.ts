import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AutorizacionService implements CanActivate {

  constructor(private auth: Permissions) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean>|boolean {
    return this.auth.canActivate('', '');
  }
}

class Permissions {
  canActivate(user: String, id: String): boolean {
    return true;
  }
}

