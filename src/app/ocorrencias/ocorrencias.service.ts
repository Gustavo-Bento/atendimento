import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ocorrencias } from './ocorrencias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  url = "http://localhost:3000/ocorrencias"

  constructor(private http: HttpClient) { }

  getOcorrencias(): Observable<Ocorrencias[]>{
    return this.http.get<Ocorrencias[]>(this.url);
  }

  save(ocorrencias: Ocorrencias): Observable<Ocorrencias>{
    return this.http.post<Ocorrencias>(this.url, ocorrencias);
  }

  delete(ocorrencias: Ocorrencias): Observable<void>{
    return this.http.delete<void>(`${this.url}/${ocorrencias.id_ocorrencia}`);
  }

  update(ocorrencias: Ocorrencias): Observable<Ocorrencias>{
    return this.http.put<Ocorrencias>(`${this.url}/${ocorrencias.id_ocorrencia}`,ocorrencias);
  }
}
