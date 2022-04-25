import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Dia, RotinaDia, Status } from '../app.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rotinasdia',
  templateUrl: './rotinasdia.component.html',
  styleUrls: ['./rotinasdia.component.scss'],
})
export class RotinasdiaComponent implements OnInit {
  readonly formDia = new FormControl('', Validators.required);
  private rotinasDiaStatus: Status[];

  readonly consultaRotinasDia$: Observable<RotinaDia[]> =
    this.formDia.valueChanges.pipe(
      switchMap((dia: string) => this.service.consultaRotinasDia(dia))
    ).pipe(
      tap((rotinasDias) => {
        this.rotinasDiaStatus = rotinasDias.map(r => r.status);
      })
    );
  constructor(private service: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() =>
      this.formDia.setValue(this.devolveDiaFormatado())
    )
  }

	private devolveDiaFormatado(): string {
		return this.service.devolveDiaFormatado();
	}

  // ACABOU A BATERIA DO CELULAR << VOU BUSCAR O CARREGADOR!

  atualizaStatus(status: Status, index: number, dia: Dia): void {
    this.rotinasDiaStatus[index] = status;
    if(dia.status.nome === 'NÃO INICIADO') {
      this.salvarDia(dia, 'EM ANDAMENTO');
    }
  }

  get podeFinalizarDia(): boolean {
    return this.rotinasDiaStatus.every(status => status.nome === 'FINALIZADO');
  }

  salvarDia(dia: Dia, nomeStatus: string): void {
    this.service.salvarDia({
      ...dia,
      horaFechamento: this.service.devolveHoraFormatada(),
      usuarioFechamento: this.service.devolveUsuarioLogado()
    }, nomeStatus).subscribe(() => this.formDia.setValue(this.formDia.value));
  }
}
