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
  hide = new BehaviorSubject<boolean>(true)

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

  togglePasswordButton() {
    this.hide.next(!this.hide.value)
  }

  senhasIguaisValidator(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCorrespondem: true };
  }
}
