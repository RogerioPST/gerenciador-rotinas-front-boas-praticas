import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioLogadoService } from './usuario-logado.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoGuard implements CanActivate {
  constructor(private service: UsuarioLogadoService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.service.usuarioLogado$.pipe(
        map(usuarioLogado => usuarioLogado !== null)
      )
  }
  
}
