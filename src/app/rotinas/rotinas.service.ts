import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';
import { Rotina } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class RotinasService {
  private readonly API = 'api/rotinas';

  constructor(private httpClient: HttpClient) {}

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
}
