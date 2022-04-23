import { Injectable } from '@angular/core';
import { Mensagem } from './mensagem.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  private readonly _mensagem$ = new BehaviorSubject<Mensagem>(null);
  readonly mensagem$ = this._mensagem$.asObservable();

  setMensagem(mensagem: Mensagem): void {
    console.log(mensagem);
    this._mensagem$.next(mensagem);
    this.contagem();
  }

  reset(): void {
    this._mensagem$.next(null);
  }

  private contagem(): void {
    setTimeout(() => {
      this.reset();
    }, 5000);
  }
}
