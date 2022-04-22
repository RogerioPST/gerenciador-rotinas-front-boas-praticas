import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioLogadoService } from 'src/app/usuario-logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {
  readonly login = new FormGroup({
    usuario: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

  readonly usuarioLogado$ = this.service.usuarioLogado$;

  constructor(private service: UsuarioLogadoService) {}

  logar(): void {
    this.service.logar(this.login.get('usuario').value);
  }

  deslogar(): void {
    this.service.deslogar();
  }
}
