import { Component, Input } from '@angular/core';
import { RotinaDia, Usuario, StatusNome } from 'src/app/app.model';
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
        console.log('>>', rotinaDia);
        this.rotinaDia = rotinaDia;
      });
  }

  private devolveHoraFormatada(): string {
    const data = new Date();
    return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  }

  private devolveUsuarioLogado(): Usuario {
    return {
      id: 7,
      nome: 'Cestari',
      matricula: 'c11111',
      tipo: 'ADM',
    };
  }

  finalizar() {
    console.log(this.rotinaDia.dia);
    this.mensagem = 'Bla bla bla';
    this.mensagemService.setMensagem({
      mensagem: 'Blo blo blo',
      tipo: 'info',
    });
  }
}
