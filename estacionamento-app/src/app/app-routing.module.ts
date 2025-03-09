import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "pessoas",
    loadChildren: () => import('./modules/pessoa-listar/pessoa-listar.module').then(modulo => modulo.PessoaListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
