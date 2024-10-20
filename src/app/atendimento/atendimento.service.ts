import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  url = 'http://localhost:3000/atendimento';

  constructor(private http: HttpClient) {}

  getAtendimento(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(this.url);
  }

  save(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.url, atendimento);
  }

  delete(atendimento: Atendimento): Observable<void> {
    return this.http.delete<void>(`${this.url}/${atendimento.id_atendimento}`);
  }

  update(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(
      `${this.url}/${atendimento.id_atendimento}`,
      atendimento
    );
  }
}
