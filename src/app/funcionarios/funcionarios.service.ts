import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionarios } from './funcionarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  url = "http://localhost:3000/funcionarios"

  constructor(private http: HttpClient) { }

  getFuniconarios(): Observable<Funcionarios[]>{
    return this.http.get<Funcionarios[]>(this.url);
  }

  save(funcionarios: Funcionarios): Observable<Funcionarios>{
    return this.http.post<Funcionarios>(this.url, funcionarios);
  }

  delete(funcionarios: Funcionarios): Observable<void>{
    return this.http.delete<void>(`${this.url}/${funcionarios.id_funcionario}`);
  }

  update(funcionarios: Funcionarios): Observable<Funcionarios>{
    return this.http.put<Funcionarios>(`${this.url}/${funcionarios.id_funcionario}`,funcionarios);
  }
}
