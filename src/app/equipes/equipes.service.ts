import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipes } from './equipes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosVeiculosService {

  url = "http://localhost:3000/equipes"

  constructor(private http: HttpClient) { }

  getEquipes(): Observable<Equipes[]>{
    return this.http.get<Equipes[]>(this.url);
  }

  save(equipes: Equipes): Observable<Equipes>{
    return this.http.post<Equipes>(this.url, equipes);
  }

  delete(equipes: Equipes): Observable<void>{
    return this.http.delete<void>(`${this.url}/${equipes.id_equipe}`);
  }

  update(equipes: Equipes): Observable<Equipes>{
    return this.http.put<Equipes>(`${this.url}/${equipes.id_equipe}`,equipes);
  }
}
