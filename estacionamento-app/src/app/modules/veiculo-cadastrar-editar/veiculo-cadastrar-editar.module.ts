import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VeiculoCadastrarEditarComponent } from 'src/app/components/veiculo-cadastrar-editar/veiculo-cadastrar-editar.component';
import { VeiculoCadastrarEditarRoutingModule } from './veiculo-cadastrar-editar-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    VeiculoCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    VeiculoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class VeiculoCadastrarEditarModule { }
