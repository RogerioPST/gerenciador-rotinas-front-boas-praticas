import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RotinaDia, Usuario, StatusNome, Dia, Status } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';

@Component({
  selector: 'app-rotinadia',
  templateUrl: './rotinadia.component.html',
  styleUrls: ['./rotinadia.component.scss'],
})
export class RotinadiaComponent {
  @Input() rotinaDia: RotinaDia;
  @Input() impar: boolean;
  @Output() status = new EventEmitter<Status>();
  mensagem: string = null;

  constructor(
    private service: AppService,
    private mensagemService: MensagemService
  ) {}

  salvar(momento: string): void {
    this.service
      .salvarRotinaDia(
        {
          ...this.rotinaDia,
          horaInicio:
            momento === 'inicio'
              ? this.devolveHoraFormatada()
              : this.rotinaDia.horaInicio,
          horaFim:
            momento === 'fim'
              ? this.devolveHoraFormatada()
              : this.rotinaDia.horaFim,
          usuarioInicioRotina:
            momento === 'inicio'
              ? this.devolveUsuarioLogado()
              : this.rotinaDia.usuarioInicioRotina,
          usuarioFimRotina:
            momento === 'fim'
              ? this.devolveUsuarioLogado()
              : this.rotinaDia.usuarioFimRotina,
        },
        momento === 'inicio' ? 'EM ANDAMENTO' : 'FINALIZADO'
      )
      .subscribe((rotinaDia) => {
        this.rotinaDia = rotinaDia;
        this.status.emit(rotinaDia.status);
      });
  }

  private devolveHoraFormatada(): string {
    return this.service.devolveHoraFormatada();
  }

  private devolveUsuarioLogado(): Usuario {
    return this.service.devolveUsuarioLogado();
  }
}
