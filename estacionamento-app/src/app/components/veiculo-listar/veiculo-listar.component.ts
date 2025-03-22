import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo-services.service';

@Component({
  selector: 'app-veiculo-listar',
  templateUrl: './veiculo-listar.component.html',
  styleUrls: ['./veiculo-listar.component.css']
})
export class VeiculoListarComponent implements OnInit {

  veiculos: Observable<Veiculo[]> = new Observable<Veiculo[]>();
  colunasTabela = ['Marca', 'Modelo', 'Cor', 'Placa', 'Dono', 'Acoes']

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarTodosVeiculos();
  }

  listarTodosVeiculos() {
    this.veiculos = this.veiculoService.listarVeiculos()
  }
}
