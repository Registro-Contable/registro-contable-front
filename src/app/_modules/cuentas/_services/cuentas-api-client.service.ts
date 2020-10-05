import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../../core/_services/api-client.service';
import { Cuenta, CuentaRequest, TipoCuenta } from '../cuentas.models';

@Injectable({
  providedIn: 'root'
})
export class CuentasApiClientService {

  private readonly pathBase = environment.api.services_url.cuentas_service;

  constructor(private apiClient: ApiClientService) { }

  listaTipoCuentas(): Promise<Array<TipoCuenta>> {
    return this.apiClient.doGet(`${this.pathBase}/tiposcuentas`);
  }

  listaCuentas(): Promise<Array<Cuenta>> {
    return this.apiClient.doGet(this.pathBase);
  }

  modificarCuenta(idCuenta: string, cuenta: CuentaRequest): Promise<Cuenta> {
    return this.apiClient.doPut(`${this.pathBase}/${idCuenta}`, cuenta);
  }

  borrarCuenta(idCuenta: string): Promise<void> {
    return this.apiClient.doDelete(`${this.pathBase}/${idCuenta}`);
  }

  crearCuenta(cuenta: CuentaRequest): Promise<Cuenta> {
    return this.apiClient.doPost(this.pathBase, cuenta);
  }
}
