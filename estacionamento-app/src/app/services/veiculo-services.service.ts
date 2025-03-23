import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';
import { VeiculoInsertRequest } from '../models/veiculo-insert-request.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private baseUrl = 'http://localhost:5122'
  private endpoint = 'api/Veiculo/v1'

  constructor(private httpClient: HttpClient) { }

  listarVeiculos(): Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(`${this.baseUrl}/${this.endpoint}`)
  }

  obterVeiculo(idVeiculo: number): Observable<Veiculo> {
    return this.httpClient.get<Veiculo>(`${this.baseUrl}/${this.endpoint}/${idVeiculo}`)
  }

  cadastrarVeiculo(veiculo: VeiculoInsertRequest): Observable<VeiculoInsertRequest> {
    return this.httpClient.post<VeiculoInsertRequest>(`${this.baseUrl}/${this.endpoint}`, veiculo)
  }

  atualizarVeiculo(veiculo: VeiculoInsertRequest): Observable<VeiculoInsertRequest> {
    return this.httpClient.put<VeiculoInsertRequest>(`${this.baseUrl}/${this.endpoint}`, veiculo)
  }
}
