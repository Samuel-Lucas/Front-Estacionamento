import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaCadastrarEditarRoutingModule } from './pessoa-cadastrar-editar-routing.module';
import { PessoaCadastrarEditarComponent } from 'src/app/components/pessoa-cadastrar-editar/pessoa-cadastrar-editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    PessoaCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    PessoaCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class PessoaCadastrarEditarModule { }
