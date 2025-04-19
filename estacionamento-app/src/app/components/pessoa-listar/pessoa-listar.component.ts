import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PessoaService } from 'src/app/services/pessoa.services.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

  pessoas: Observable<Pessoa[]> = new Observable<Pessoa[]>();
  colunasTabela = ['Nome', 'Sobrenome', 'Email', 'Telefone', 'Acoes']
  nameId!: string

  constructor(
    private pessoaService: PessoaService,
    private userStore: UserStoreService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarTodasPessoas()

    this.userStore.getNameIdFromStore().subscribe(
      value => {
        let nameIdFromToken = this.auth.getNameIdFromToken()
        this.nameId = value || nameIdFromToken
      }
    )
  }

  listarTodasPessoas() {
    this.pessoas = this.pessoaService.listarPessoas()
  }

  deletarPessoa(idPessoa: string) {
    if (confirm("Deseja excluir sua conta ?")) {
      this.pessoaService.deletarPessoa(idPessoa).subscribe(
        response => {
          this.auth.signOut()
          this.snackBar.open("Conta excluída com sucesso", '', {
            duration: 4000,
          })
        },
        error => {
          alert("Erro ao excluir conta " + JSON.stringify(error))
        }
      )
    }
  }
}
