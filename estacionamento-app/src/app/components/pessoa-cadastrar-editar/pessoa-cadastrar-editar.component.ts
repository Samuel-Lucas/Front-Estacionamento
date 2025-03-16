import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.services.service';

@Component({
  selector: 'app-pessoa-cadastrar-editar',
  templateUrl: './pessoa-cadastrar-editar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pessoa-cadastrar-editar.component.css']
})
export class PessoaCadastrarEditarComponent implements OnInit {

  formGroup!: FormGroup
  senhaVisivel = false
  confirmarSenhaVisivel = false
  pessoa!: Pessoa

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.pessoa = this.activatedRoute.snapshot.data["pessoa"]

    this.formGroup = this.formBuilder.group({
      idPessoa: [(this.pessoa && this.pessoa.idPessoa) ? this.pessoa.idPessoa : null, []],
      nome: [(this.pessoa && this.pessoa.nome) ? this.pessoa.nome : null, Validators.required],
      sobreNome: [(this.pessoa && this.pessoa.sobreNome) ? this.pessoa.sobreNome : null, Validators.required],
      email: [(this.pessoa && this.pessoa.email) ? this.pessoa.email : null, Validators.required],
      senha: ["", this.pessoa ? [] : [Validators.required]],
      confirmarSenha: ["", this.pessoa ? [] : [Validators.required]],
      telefone: [(this.pessoa && this.pessoa.telefone) ? this.pessoa.telefone : null, Validators.required],
    },
    {
      validator: this.senhasIguaisValidator
    })
  }

  salvar() {

    if (this.pessoa && this.pessoa.idPessoa) {

      this.pessoaService.atualizarPessoa(this.formGroup.value).subscribe(
        pessoaAtualizada => {
          this.router.navigateByUrl("/pessoas")
        },
        error => {
          alert("Erro ao realizar edição do usuário" + JSON.stringify(error))
        }
      )

    } else {

      this.pessoaService.cadastrarPessoa(this.formGroup.value).subscribe(
        pessoaCadastrada => {
          this.router.navigateByUrl("/pessoas")
        },
        error => {
          alert("Erro ao realizar o cadastro " + JSON.stringify(error))
        }
      )
    }
  }

  toggleVisibility(input: 'senha' | 'confirmarSenha'): void {
    if (input === 'senha') {
      this.senhaVisivel = !this.senhaVisivel
    } else if (input === 'confirmarSenha') {
      this.confirmarSenhaVisivel = !this.confirmarSenhaVisivel
    }
  }

  senhasIguaisValidator(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCorrespondem: true }
  }
}
