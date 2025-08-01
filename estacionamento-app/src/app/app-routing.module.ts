import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "",
    loadChildren: () => import('./modules/home/home.module').then(modulo => modulo.HomeModule)
  },
  {
    path: 'home',
    redirectTo: "",
    pathMatch: 'full'
  },
  {
    path: "pessoas",
    loadChildren: () => import('./modules/pessoa-listar/pessoa-listar.module').then(modulo => modulo.PessoaListarModule),
    canActivate: [AuthGuard]
  },
  {
    path: "pessoas/cadastrar",
    loadChildren: () => import('./modules/pessoa-cadastrar-editar/pessoa-cadastrar-editar.module').then(modulo => modulo.PessoaCadastrarEditarModule)
  },
  {
    path: "pessoas/editar/:id",
    loadChildren: () => import('./modules/pessoa-cadastrar-editar/pessoa-cadastrar-editar.module').then(modulo => modulo.PessoaCadastrarEditarModule)
  },
  {
    path: "veiculos",
    loadChildren: () => import('./modules/veiculo-listar/veiculo-listar.module').then(modulo => modulo.VeiculoListarModule),
    canActivate: [AuthGuard]
  },
  {
    path: "veiculos/cadastrar",
    loadChildren: () => import('./modules/veiculo-cadastrar-editar/veiculo-cadastrar-editar.module').then(modulo => modulo.VeiculoCadastrarEditarModule)
  },
  {
    path: "veiculos/editar/:id",
    loadChildren: () => import('./modules/veiculo-cadastrar-editar/veiculo-cadastrar-editar.module').then(modulo => modulo.VeiculoCadastrarEditarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
