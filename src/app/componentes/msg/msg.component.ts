import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent {
  @Input() mensagem: string;
  @Input() tipo: 'info' | 'alerta' | 'erro' | 'sucesso' = 'info';

  fechar() {
    this.mensagem = null;
  }
}
