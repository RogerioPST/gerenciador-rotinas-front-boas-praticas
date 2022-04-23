import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TipoMensagem } from '../componentes/mensagem/mensagem.model';
import { MensagemService } from '../componentes/mensagem/mensagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly form = new FormGroup({
    mensagem: new FormControl(''),
    tipo: new FormControl('info'),
  });

  constructor(private mensagemService: MensagemService) {}

  definirMensagem(): void {
    this.mensagemService.setMensagem({
      mensagem: this.mensagem,
      tipo: this.tipo,
    });
  }

  reset(): void {
    this.mensagemService.reset();
  }

  get mensagem(): string {
    return this.form.get('mensagem').value;
  }

  get tipo(): TipoMensagem {
    console.log(this.form.get('tipo').value);
    return this.form.get('tipo').value as TipoMensagem;
  }
}
