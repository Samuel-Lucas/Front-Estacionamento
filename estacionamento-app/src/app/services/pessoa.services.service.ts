import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';
import { PessoaInsertRequest } from '../models/pessoa-insert-request.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Pessoa/v1'

  constructor(private httpClient: HttpClient) { }

  listarPessoas(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}/${this.endpoint}`)
  }

  cadastrarPessoa(pessoa: PessoaInsertRequest): Observable<PessoaInsertRequest> {
    return this.httpClient.post<PessoaInsertRequest>(`${this.baseUrl}/${this.endpoint}`, pessoa)
  }
}
