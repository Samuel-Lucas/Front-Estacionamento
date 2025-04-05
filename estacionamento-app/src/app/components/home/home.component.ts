import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm!: FormGroup
  senhaVisivel = false

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      senha: ["", Validators.required]
    })
  }

  toggleVisibility(input: 'senha'): void {
    if (input === 'senha') {
      this.senhaVisivel = !this.senhaVisivel
    }
  }

  signin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        pessoaAutenticada => {
          this.snackBar.open("Login concluído !", 'Login', {
            duration: 2000,
          })
          this.router.navigateByUrl("/pessoas")
        },
        error => {
          alert("Erro ao realizar o login " + JSON.stringify(error))
        }
      )
    }
    else {
      alert("Preenchimento do login não é válido !")
    }
  }
}
