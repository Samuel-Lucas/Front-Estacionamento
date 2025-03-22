import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoListarComponent } from 'src/app/components/veiculo-listar/veiculo-listar.component';

const routes: Routes = [
  { path: "", component: VeiculoListarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoListarRoutingModule { }
