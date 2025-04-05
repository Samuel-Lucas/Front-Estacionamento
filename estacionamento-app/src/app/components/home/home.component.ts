import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm!: FormGroup
  senhaVisivel = false

  constructor(private formBuilder: FormBuilder) { }

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
}
