import { Injectable } from '@angular/core';
import { VeiculoService } from './veiculo-services.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})

export class VeiculoResolverService implements Resolve<Veiculo> {

  constructor(private veiculoService: VeiculoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const id = route.params["id"]

    if (id) {
      return this.veiculoService.obterVeiculo(id)
    }

    return null!
  }
}
