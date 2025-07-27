import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { VeiculoService } from 'src/app/services/veiculo-services.service';

@Component({
  selector: 'app-veiculo-listar',
  templateUrl: './veiculo-listar.component.html',
  styleUrls: ['./veiculo-listar.component.css']
})
export class VeiculoListarComponent implements OnInit {

  veiculos: Observable<Veiculo[]> = new Observable<Veiculo[]>()
  colunasTabela = ['Marca', 'Modelo', 'Cor', 'Placa', 'Dono', 'Acoes']
  nameId!: string
  vagasRestantes!: number

  constructor(
    private veiculoService: VeiculoService,
    private userStore: UserStoreService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obterVagasRestantesVeiculos()
    this.listarTodosVeiculos()

    this.userStore.getNameIdFromStore().subscribe(
      value => {
        let nameIdFromToken = this.auth.getNameIdFromToken()
        this.nameId = value || nameIdFromToken
      }
    )
  }

  listarTodosVeiculos() {
    this.veiculos = this.veiculoService.listarVeiculos()
  }

  obterVagasRestantesVeiculos() {
    this.veiculoService.obterQuantidadeVeiculos().subscribe(
      response => {
        this.vagasRestantes = 10 - response
      },
      error => {
        alert("Erro ao obter quantidade de veículos" + JSON.stringify(error))
      }
    )
  }

  deletarVeiculo(idVeiculo: number) {
    if (confirm("Deseja remover seu veículo ?")) {
      this.veiculoService.removerVeiculo(idVeiculo).subscribe(
        response => {
          this.router.navigateByUrl("pessoas")
        },
        error => {
          alert("Erro ao excluir veículo " + JSON.stringify(error))
        }
      )
    }
  }
}
