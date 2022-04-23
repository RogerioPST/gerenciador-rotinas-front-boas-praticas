import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioLogadoService {
  private readonly _usuarioLogado$ = new BehaviorSubject<string | null>(null);
  readonly usuarioLogado$ = this._usuarioLogado$.asObservable();

  constructor(private router: Router) {
    this.verificaSeEstaLogado();
  }

  logar(matricula: string): void {
    this._usuarioLogado$.next(matricula);
    localStorage.setItem('usuarioLogado', matricula);
  }

  deslogar(): void {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/']);
    this._usuarioLogado$.next(null);
  }

  private verificaSeEstaLogado(): void {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      this.logar(usuarioLogado);
    }
  }
}
