import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.services.service';

@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

  pessoas: Observable<Pessoa[]> = new Observable<Pessoa[]>();
  colunasTabela = ['Nome', 'Sobrenome', 'Email', 'Telefone', 'Acoes']

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarTodasPessoas();
  }

  listarTodasPessoas() {
    this.pessoas = this.pessoaService.listarPessoas()
  }

  deletarPessoa(idPessoa: string) {
    if (confirm("Deseja excluir sua conta ?")) {
      this.pessoaService.deletarPessoa(idPessoa).subscribe(
        response => {
          this.router.navigateByUrl("")
        },
        error => {
          alert("Erro ao excluir conta" + JSON.stringify(error))
        }
      )
    }
  }
}
