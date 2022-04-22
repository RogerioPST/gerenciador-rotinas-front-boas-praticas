import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { RotinaDia } from '../app.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rotinasdia',
  templateUrl: './rotinasdia.component.html',
  styleUrls: ['./rotinasdia.component.scss'],
})
export class RotinasdiaComponent implements OnInit {
  readonly dia = new FormControl('', Validators.required);

  readonly consultaRotinasDia$: Observable<RotinaDia[]> =
    this.dia.valueChanges.pipe(
      switchMap((dia: string) => this.service.consultaRotinasDia(dia))
    );

  constructor(private service: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.route.paramMap.subscribe(params => this.dia.setValue(params.get('dia')));
      this.dia.setValue(this.devolveDiaFormatado());
    })
  }

	private devolveDiaFormatado(): string {
		const data = new Date();
		var dia = String(data. getDate()). padStart(2 ,'0');
		var mes = String(data. getMonth() + 1). padStart(2, '0');
		return `${data.getFullYear()}-${mes}-${dia}`;
	}
}
