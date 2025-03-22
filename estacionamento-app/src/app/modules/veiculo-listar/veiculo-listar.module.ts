import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoListarComponent } from 'src/app/components/veiculo-listar/veiculo-listar.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { VeiculoListarRoutingModule } from './veiculo-listar-routing.module';

@NgModule({
  declarations: [
    VeiculoListarComponent
  ],
  imports: [
    CommonModule,
    VeiculoListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ],
})
export class VeiculoListarModule { }
