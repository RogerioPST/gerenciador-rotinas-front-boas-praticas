import { Component } from '@angular/core';
import { UsuarioLogadoService } from '../usuario-logado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly usuarioLogado$ = this.service.usuarioLogado$;

  constructor(private service: UsuarioLogadoService) {}
}
