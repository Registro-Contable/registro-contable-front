import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../../core/_services/api-client.service';
import { CategoriaRequest, CategoriaResponse } from '../categorias.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriasApiClienService {

  private readonly pathBase = environment.api.services_url.categorias_service;

  constructor(private apiClient: ApiClientService) { }

  listaCategorias(tipoMovimiento: string): Promise<Array<CategoriaResponse>> {
    return this.apiClient.doGet(`${this.pathBase}/?filter=${tipoMovimiento}`);
  }

  addCategoria(categoria: CategoriaRequest): Promise<CategoriaResponse> {
    return this.apiClient.doPost(`${this.pathBase}/`, categoria);
  }

  eliminarCategoria(categoriaId: string): Promise<void> {
    return this.apiClient.doDelete(`${this.pathBase}/${categoriaId}`);
  }

  modificarCategoria(categoriaId: string, categoria: CategoriaRequest): Promise<CategoriaResponse> {
    return this.apiClient.doPut(`${this.pathBase}/${categoriaId}`, categoria);
  }
}
