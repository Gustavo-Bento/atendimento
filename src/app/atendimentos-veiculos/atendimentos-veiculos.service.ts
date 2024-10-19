import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtendimentoVeiculos } from './atendimentos-veiculos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosVeiculosService {

  url = "http://localhost:3000/atendimentos-veiculos"

  constructor(private http: HttpClient) { }

  getAtendimentos(): Observable<AtendimentoVeiculos[]>{
    return this.http.get<AtendimentoVeiculos[]>(this.url);
  }

  save(atendimento: AtendimentoVeiculos): Observable<AtendimentoVeiculos>{
    return this.http.post<AtendimentoVeiculos>(this.url, atendimento);
  }

  delete(atendimento: AtendimentoVeiculos): Observable<void>{
    return this.http.delete<void>(`${this.url}/${atendimento.id_atentimento}`);
  }

  update(atendimento: AtendimentoVeiculos): Observable<AtendimentoVeiculos>{
    return this.http.put<AtendimentoVeiculos>(`${this.url}/${atendimento.id_atentimento}`,atendimento);
  }
}
