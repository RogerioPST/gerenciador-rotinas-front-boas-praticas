import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {
  // private readonly _usuarioLogado$ = new BehaviorSubject<Usuario | null>(null);
  private readonly _usuarioLogado$ = new BehaviorSubject<string | null>(null);
  readonly usuarioLogado$ = this._usuarioLogado$.asObservable();

  logar(matricula: string): void {
    // this.httpServer...
    this._usuarioLogado$.next(matricula);
  }

  deslogar(): void {
    this._usuarioLogado$.next(null);
  }
}
