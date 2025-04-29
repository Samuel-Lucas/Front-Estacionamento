import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';
import { VeiculoInsertRequest } from '../models/veiculo-insert-request.model';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Veiculo/v1'

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  listarVeiculos(): Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(`${this.baseUrl}/${this.endpoint}`, {
      headers: this.getHeaders()
    })
  }

  obterVeiculo(idVeiculo: number): Observable<Veiculo> {
    return this.httpClient.get<Veiculo>(`${this.baseUrl}/${this.endpoint}/${idVeiculo}`, {
      headers: this.getHeaders()
    })
  }

  obterQuantidadeVeiculos(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl}/${this.endpoint}/quantidade-veiculos`, {
      headers: this.getHeaders()
    })
  }

  cadastrarVeiculo(veiculo: VeiculoInsertRequest): Observable<VeiculoInsertRequest> {
    return this.httpClient.post<VeiculoInsertRequest>(`${this.baseUrl}/${this.endpoint}`, veiculo, {
      headers: this.getHeaders()
    })
  }

  atualizarVeiculo(veiculo: VeiculoInsertRequest): Observable<VeiculoInsertRequest> {
    return this.httpClient.put<VeiculoInsertRequest>(`${this.baseUrl}/${this.endpoint}`, veiculo, {
      headers: this.getHeaders()
    })
  }

  removerVeiculo(idVeiculo: number): Observable<Veiculo> {
    return this.httpClient.delete<Veiculo>(`${this.baseUrl}/${this.endpoint}/${idVeiculo}`, {
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
