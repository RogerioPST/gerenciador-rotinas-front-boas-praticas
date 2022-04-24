import { Component, Input, Output } from '@angular/core';
import { RotinaDia, Usuario, StatusNome, Dia } from 'src/app/app.model';
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
  ) {		
	}

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
		return this.service.devolveHoraFormatada();
  }

  private devolveUsuarioLogado(): Usuario {
		return this.service.devolveUsuarioLogado();
    
  }

  salvarDia(momento: string) {	
		this.service
      .salvarDia(
        {
          ...this.rotinaDia.dia,
          horaAbertura:
            momento === 'inicio'
              ? this.devolveHoraFormatada()
              : this.rotinaDia.dia.horaAbertura,
          horaFechamento:
            momento === 'fim'
              ? this.devolveHoraFormatada()
              : this.rotinaDia.dia.horaFechamento,
					usuarioAbertura:
            momento === 'inicio'
              ? this.devolveUsuarioLogado()
              : this.rotinaDia.dia.usuarioAbertura,
					usuarioFechamento:
            momento === 'fim'
              ? this.devolveUsuarioLogado()
              : this.rotinaDia.dia.usuarioFechamento,
        },
        momento === 'inicio' ? 'EM ANDAMENTO' : 'FINALIZADO'
      )
      .subscribe((dia) => {
        console.log('>>dia', dia);
        this.rotinaDia.dia = dia;
				/* this.mensagem = 'mensagem Dia finalizado'; */
				this.mensagemService.setMensagem({
					mensagem: 'Dia finalizado!',
					tipo: 'sucesso',
				});
      });


    /* console.log(this.rotinaDia.dia);
    this.mensagem = 'Bla bla bla';
    this.mensagemService.setMensagem({
      mensagem: 'Blo blo blo',
      tipo: 'info',
    }); */
  }	
}
