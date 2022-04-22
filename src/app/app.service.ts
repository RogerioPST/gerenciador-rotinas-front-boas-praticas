import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RotinaDia, StatusNome, Status } from './app.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly API = 'api/rotinas_dia';
  private readonly API_STATUS = 'api/status';

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

  buscarStatus(status: string): Observable<Status> {
    return this.httpClient.get<Status>(`${this.API_STATUS}/${status}`);
  }
}
