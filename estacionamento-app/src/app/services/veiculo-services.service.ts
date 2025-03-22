import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

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
}
