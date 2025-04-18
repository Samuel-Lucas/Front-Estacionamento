import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { VeiculoService } from 'src/app/services/veiculo-services.service';

@Component({
  selector: 'app-veiculo-cadastrar-editar',
  templateUrl: './veiculo-cadastrar-editar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./veiculo-cadastrar-editar.component.css']
})
export class VeiculoCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup
  veiculo!: Veiculo
  nameId: string = ""

  constructor(
    private formBuilder: FormBuilder,
    private veiculoService: VeiculoService,
    private userStore: UserStoreService,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.veiculo = this.activatedRoute.snapshot.data["veiculo"]

    this.formGroup = this.formBuilder.group({
      idVeiculo: [(this.veiculo && this.veiculo.idVeiculo) ? this.veiculo.idVeiculo : null, []],
      marca: [(this.veiculo && this.veiculo.marca) ? this.veiculo.marca : null, Validators.required],
      modelo: [(this.veiculo && this.veiculo.modelo) ? this.veiculo.modelo : null, Validators.required],
      cor: [(this.veiculo && this.veiculo.cor) ? this.veiculo.cor : null, Validators.required],
      placa: [(this.veiculo && this.veiculo.placa) ? this.veiculo.placa : null, [Validators.required]],
      idPessoa: [(this.veiculo && this.veiculo.idPessoa) ? this.veiculo.idPessoa : [], [Validators.required]],
      nome: ["", this.veiculo ? [] : []],
      sobreNome: ["", this.veiculo ? [] : []]
    })

    this.userStore.getNameIdFromStore().subscribe(
      value => {
        let nameIdFromToken = this.auth.getNameIdFromToken()
        this.nameId = value || nameIdFromToken

        this.formGroup.patchValue({
          idPessoa: this.nameId
        });
      }
    )
  }

  salvarVeiculo() {

    if (this.veiculo && this.veiculo.idVeiculo) {

      this.veiculoService.atualizarVeiculo(this.formGroup.value).subscribe(
        veiculoAtualizado => {
          this.router.navigateByUrl("/veiculos")
        },
        error => {
          alert("Erro ao realizar edição do veículo" + JSON.stringify(error))
        }
      )

    } else {

      this.veiculoService.cadastrarVeiculo(this.formGroup.value).subscribe(
        veiculoCadastrado => {
          this.router.navigateByUrl("/veiculos")
        },
        error => {
          alert("Erro ao realizar o cadastro do veículo " + JSON.stringify(error))
        }
      )
    }
  }
}
