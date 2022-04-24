import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rotina } from '../app.model';
import { MensagemService } from '../componentes/mensagem/mensagem.service';
import { UsuarioLogadoService } from '../usuario-logado.service';
import { RotinasService } from './rotinas.service';

@Component({
  selector: 'app-rotinas',
  templateUrl: './rotinas.component.html',
  styleUrls: ['./rotinas.component.scss'],
})
export class RotinasComponent implements OnInit {
  readonly usuarioLogado$ = this.usuarioLogadoService.usuarioLogado$;

  novaRotina = new FormGroup({
    descricao: new FormControl('', Validators.required)
  });

  rotinas: Rotina[] = null;

  constructor(
    private usuarioLogadoService: UsuarioLogadoService,
    private service: RotinasService, private mensagemService: MensagemService
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.service.list().subscribe((rotinas) => (this.rotinas = rotinas));
  }

  criarNovaRotina(): void {
    this.service.create(this.novaRotina.get('descricao').value).subscribe(() => {
			this.mensagemService.setMensagem({
				mensagem: 'Rotina criada com sucesso!',
				tipo: 'info',
			});
			this.getList()}
			);
  }
}
