import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definimos uma interface para tipar nossos dados de consulta
export interface Consulta {
  id?: number;
  paciente: string;
  medico: string;
  data_consulta: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private apiUrl = 'http://127.0.0.1:8000/api/consultas/'; // URL da nossa API Django

  constructor(private http: HttpClient) { }

  // READ: Buscar todas as consultas
  getConsultas(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.apiUrl);
  }

  // READ: Buscar uma consulta por ID
  getConsulta(id: number): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.apiUrl}${id}/`);
  }

  // CREATE: Criar uma nova consulta
  addConsulta(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.apiUrl, consulta);
  }

  // UPDATE: Atualizar uma consulta existente
  updateConsulta(id: number, consulta: Consulta): Observable<Consulta> {
    return this.http.put<Consulta>(`${this.apiUrl}${id}/`, consulta);
  }

  // DELETE: Deletar uma consulta
  deleteConsulta(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}