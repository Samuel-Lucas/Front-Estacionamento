import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoCadastrarEditarComponent } from 'src/app/components/veiculo-cadastrar-editar/veiculo-cadastrar-editar.component';
import { VeiculoResolverService } from 'src/app/services/veiculo-resolver.service';

const routes: Routes = [
  {
    path: "",
    component: VeiculoCadastrarEditarComponent,
    resolve: {
      veiculo: VeiculoResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoCadastrarEditarRoutingModule { }
