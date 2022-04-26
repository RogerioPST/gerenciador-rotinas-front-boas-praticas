import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RotinaDia, StatusNome, Status, Dia, Usuario } from './app.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly API = 'api/rotinas_dia';
  private readonly API_STATUS = 'api/status';
  private readonly API_DIA = 'api/dias';

  constructor(private httpClient: HttpClient) {}

  consultaRotinasDia(data: string): Observable<RotinaDia[]> {
    return this.httpClient.get<RotinaDia[]>(`${this.API}/${data}`);
  }

  salvarRotinaDia(rotinaDia: RotinaDia, status: string): Observable<RotinaDia> {
    return this.buscarStatus(status).pipe(
      switchMap((retornoStatus: Status) =>
        this.httpClient.put<RotinaDia>(`${this.API}/${rotinaDia.id}`, {
          ...rotinaDia,
          status: retornoStatus,
        })
      )
    );
  }

  salvarDia(dia: Dia, status: string): Observable<Dia> {
    return this.buscarStatus(status).pipe(
      switchMap((retornoStatus: Status) => {
        return this.httpClient.put<Dia>(`${this.API_DIA}/${dia.id}`, {
          ...dia,
          status: retornoStatus,
        });
      }
      )
    );
  }

  buscarStatus(status: string): Observable<Status> {
    return this.httpClient.get<Status>(`${this.API_STATUS}/${status}`);
  }

	devolveUsuarioLogado(): Usuario{
		return {
      id: 6,
      nome: 'Roger',
      matricula: 'c007007',
      tipo: 'ADM',
    };
	}

	devolveHoraFormatada(): string {
    const data = new Date();
    return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
	}

	devolveDiaFormatado(): string {
		const data = new Date();
		var dia = String(data. getDate()). padStart(2 ,'0');
		var mes = String(data. getMonth() + 1). padStart(2, '0');
		return `${data.getFullYear()}-${mes}-${dia}`;
	}

	
}
