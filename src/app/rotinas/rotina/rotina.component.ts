import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Rotina } from 'src/app/app.model';
import { MensagemService } from 'src/app/componentes/mensagem/mensagem.service';
import { RotinasService } from '../rotinas.service';

@Component({
  selector: 'app-rotina',
  templateUrl: './rotina.component.html',
  styleUrls: ['./rotina.component.scss']
})
export class RotinaComponent implements OnInit {
  @Input() rotina: Rotina;
  @Output() atualizar = new EventEmitter<string>();
  descricao = new FormControl('', Validators.required);

  constructor(private service: RotinasService, private mensagemService: MensagemService) { }

  ngOnInit(): void {
    setTimeout(() => this.descricao.setValue(this.rotina.descricao));
  }
  
  alterar(): void {
    this.service.update({...this.rotina, descricao: this.descricao.value}).subscribe(
      () => {
				this.mensagemService.setMensagem({
					mensagem: 'Rotina alterada com sucesso!',
					tipo: 'info',
				});
				this.atualizar.emit()}
    );
  }
/* 
  apagar():void {
    this.service.delete(this.rotina.id).pipe(

			tap(_ => {
				this.mensagemService.setMensagem({
					mensagem: 'Rotina apagada com sucesso!',
					tipo: 'info',
				});
				this.atualizar.emit()
			}),    
			catchError( 				
				this.mensagemService.setMensagem({
					mensagem: `Não foi possível apagar! ${error}`,
					tipo: 'erro',
				});
				
			);
  } */
  apagar():void {
    this.service.delete(this.rotina.id).subscribe(() => {
			this.mensagemService.setMensagem({
				mensagem: 'Rotina apagada com sucesso!',
				tipo: 'info',
			});
			this.atualizar.emit()
		});
  }
}
