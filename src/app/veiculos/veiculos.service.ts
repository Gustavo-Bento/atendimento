import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculos } from './veiculos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  url = "http://localhost:3000/veiculos"

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculos[]>{
    return this.http.get<Veiculos[]>(this.url);
  }

  save(veiculos: Veiculos): Observable<Veiculos>{
    return this.http.post<Veiculos>(this.url, veiculos);
  }

  delete(veiculos: Veiculos): Observable<void>{
    return this.http.delete<void>(`${this.url}/${veiculos.id_veiculo}`);
  }

  update(veiculos: Veiculos): Observable<Veiculos>{
    return this.http.put<Veiculos>(`${this.url}/${veiculos.id_veiculo}`,veiculos);
  }
}
