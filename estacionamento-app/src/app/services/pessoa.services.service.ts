import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';
import { PessoaInsertRequest } from '../models/pessoa-insert-request.model';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Pessoa/v1'

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  listarPessoas(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}/${this.endpoint}`, {
      headers: this.getHeaders()
    })
  }

  obterPessoa(idPessoa: string): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(`${this.baseUrl}/${this.endpoint}/${idPessoa}`, {
      headers: this.getHeaders()
    })
  }

  cadastrarPessoa(pessoa: PessoaInsertRequest): Observable<PessoaInsertRequest> {
    return this.httpClient.post<PessoaInsertRequest>(`${this.baseUrl}/${this.endpoint}`, pessoa)
  }

  atualizarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.put<Pessoa>(`${this.baseUrl}/${this.endpoint}`, pessoa, {
      headers: this.getHeaders()
    })
  }

  deletarPessoa(idPessoa: string): Observable<Pessoa> {
    return this.httpClient.delete<Pessoa>(`${this.baseUrl}/${this.endpoint}/${idPessoa}`, {
      headers: this.getHeaders()
    })
  }

  private getHeaders(): HttpHeaders {
    const userToken = this.auth.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${userToken}`
    });
  }
}
