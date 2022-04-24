import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, first, tap } from 'rxjs/operators';
import { Rotina } from '../app.model';
import { MensagemService } from '../componentes/mensagem/mensagem.service';

@Injectable({
  providedIn: 'root',
})
export class RotinasService {
  private readonly API = 'api/rotinas';

  constructor(private httpClient: HttpClient, private mensagemService: MensagemService) {}

  list(): Observable<Rotina[]> {
    return this.httpClient.get<Rotina[]>(this.API);
  }

  loadById(id: number): Observable<Rotina> {
    return this.httpClient.get<Rotina>(`${this.API}/${id}`);
  }

  create(descricao: string): Observable<Rotina> {
    return this.httpClient.post<Rotina>(this.API, { descricao });
  }

  update(rotina: Rotina): Observable<Rotina> {
    return this.httpClient.put<Rotina>(`${this.API}/${rotina.id}`, rotina);
  }

  delete(id: number): Observable<Rotina> {
    return this.httpClient.delete<Rotina>(`${this.API}/${id}`);
  }
/*   delete(id: number): Observable<Rotina> {
    return this.httpClient.delete<Rotina>(`${this.API}/${id}`)
		.pipe(
			catchError( error =>	{			
				this.mensagemService.setMensagem({
					mensagem: `Não foi possível apagar! ${error}`,
					tipo: 'erro',
				});
				
			}
				
			));
  } */
}
