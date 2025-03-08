import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaListarRoutingModule } from './pessoa-listar-routing.module';
import { PessoaListarComponent } from './PessoaListar/PessoaListar.component';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PessoaListarComponent
  ],
  imports: [
    CommonModule,
    PessoaListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class PessoaListarModule { }
