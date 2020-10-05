import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../../core/_services/api-client.service';
import { Cuenta } from '../cuentas.models';

@Injectable({
  providedIn: 'root'
})
export class CuentasApiClientService {

  private readonly pathBase = environment.api.services_url.cuentas_service;

  constructor(private apiClient: ApiClientService) { }

  listaCuentas(): Promise<Array<Cuenta>> {
    return this.apiClient.doGet(this.pathBase);
  }

  modificarCuenta(cuenta: Cuenta): Promise<Cuenta> {
    return this.apiClient.doPut(`${this.pathBase}/${cuenta.id}`, cuenta);
  }
}
