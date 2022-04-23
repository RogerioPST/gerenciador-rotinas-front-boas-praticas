import { Component } from '@angular/core';
import { Mensagem } from './mensagem.model';
import { MensagemService } from './mensagem.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
})
export class MensagemComponent {
  mensagem$: Observable<Mensagem> = this.service.mensagem$;

  constructor(private service: MensagemService) {}
}
