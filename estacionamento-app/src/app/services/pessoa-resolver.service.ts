import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PessoaService } from './pessoa.services.service';

@Injectable({
  providedIn: 'root'
})

export class PessoaResolverService implements Resolve<Pessoa> {

  constructor(private pessoaService: PessoaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const id = route.params["id"]

    if (id) {
      return this.pessoaService.obterPessoa(id)
    }

    return null!
  }
}
