import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "",
    loadChildren: () => import('./modules/home/home.module').then(modulo => modulo.HomeModule)
  },
  {
    path: "pessoas",
    loadChildren: () => import('./modules/pessoa-listar/pessoa-listar.module').then(modulo => modulo.PessoaListarModule)
  },
  {
    path: "pessoas/cadastrar",
    loadChildren: () => import('./modules/pessoa-cadastrar-editar/pessoa-cadastrar-editar.module').then(modulo => modulo.PessoaCadastrarEditarModule)
  },
  {
    path: "pessoas/editar/:id",
    loadChildren: () => import('./modules/pessoa-cadastrar-editar/pessoa-cadastrar-editar.module').then(modulo => modulo.PessoaCadastrarEditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
