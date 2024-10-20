import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turnos } from '././turnos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  url = "http://localhost:3000/turnos"

  constructor(private http: HttpClient) { }

  getTurnos(): Observable<Turnos[]>{
    return this.http.get<Turnos[]>(this.url);
  }

  save(turnos: Turnos): Observable<Turnos>{
    return this.http.post<Turnos>(this.url, turnos);
  }

  delete(turnos: Turnos): Observable<void>{
    return this.http.delete<void>(`${this.url}/${turnos.id_turno}`);
  }

  update(turnos: Turnos): Observable<Turnos>{
    return this.http.put<Turnos>(`${this.url}/${turnos.id_turno}`,turnos);
  }
}
