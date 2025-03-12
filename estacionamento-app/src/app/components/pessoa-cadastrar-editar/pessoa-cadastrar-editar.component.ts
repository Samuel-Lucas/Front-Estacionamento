import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: ["", Validators.required],
      sobreNome: ["", Validators.required],
      email: ["", Validators.required],
      senha: ["", Validators.required],
      confirmarSenha: ["", Validators.required],
      telefone: ["", Validators.required],
    },
    {
      validator: this.senhasIguaisValidator
    })
  }

  salvar() {

    if (this.formGroup.invalid) {
      alert('Preenchimento do formulário inválido !');
      return;
    }

    this.pessoaService.cadastrarPessoa(this.formGroup.value).subscribe(
      pessoaCadastrada => {
        this.router.navigateByUrl("/pessoas")
      },
      error => {
        alert("Erro ao realizar o cadastro " + JSON.stringify(error))
      }
    )
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
