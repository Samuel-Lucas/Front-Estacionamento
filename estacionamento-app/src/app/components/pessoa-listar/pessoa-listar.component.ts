import { Component, OnInit } from '@angular/core';
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

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listarTodasPessoas();
  }

  listarTodasPessoas() {
    this.pessoas = this.pessoaService.listarPessoas()
  }
}
