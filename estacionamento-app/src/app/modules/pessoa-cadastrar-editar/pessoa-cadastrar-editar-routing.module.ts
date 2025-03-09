import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastrarEditarComponent } from 'src/app/components/pessoa-cadastrar-editar/pessoa-cadastrar-editar.component';

const routes: Routes = [
  { path: "", component: PessoaCadastrarEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaCadastrarEditarRoutingModule { }
