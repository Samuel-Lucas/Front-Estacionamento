import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastrarEditarComponent } from 'src/app/components/pessoa-cadastrar-editar/pessoa-cadastrar-editar.component';
import { PessoaResolverService } from 'src/app/services/pessoa-resolver.service';

const routes: Routes = [
  {
    path: "",
    component: PessoaCadastrarEditarComponent,
    resolve: {
      pessoa: PessoaResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaCadastrarEditarRoutingModule { }
