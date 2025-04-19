import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaListarRoutingModule } from './pessoa-listar-routing.module';
import { PessoaListarComponent } from '../../components/pessoa-listar/pessoa-listar.component';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PessoaListarComponent
  ],
  imports: [
    CommonModule,
    PessoaListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class PessoaListarModule { }
