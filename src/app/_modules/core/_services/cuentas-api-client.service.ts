import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../../core/_services/api-client.service';
import { CapitalCuenta, Cuenta, CuentaRequest, MedioPago, MedioPagoRequest, TipoCuenta, TipoMedioPago } from '../models/cuentas.models';

@Injectable({
  providedIn: 'root'
})
export class CuentasApiClientService {

  private readonly pathBase = environment.api.services_url.cuentas_service;

  constructor(private apiClient: ApiClientService) { }

  listaTipoCuentas(): Promise<Array<TipoCuenta>> {
    return this.apiClient.doGet(`${this.pathBase}/tipos/tipocuenta`);
  }

  listaTipoMediosPago(): Promise<Array<TipoMedioPago>> {
    return this.apiClient.doGet(`${this.pathBase}/tipos/tipomediopago`);
  }

  listaCuentas(): Promise<Array<Cuenta>> {
    return this.apiClient.doGet(`${this.pathBase}/cuentas`);
  }

  capitalCuenta(idCuenta: string): Promise<CapitalCuenta> {
    return this.apiClient.doGet(`${this.pathBase}/cuentas/${idCuenta}/capital`);
  }

  modificarCuenta(idCuenta: string, cuenta: CuentaRequest): Promise<Cuenta> {
    return this.apiClient.doPut(`${this.pathBase}/cuentas/${idCuenta}`, cuenta);
  }

  borrarCuenta(idCuenta: string): Promise<void> {
    return this.apiClient.doDelete(`${this.pathBase}/cuentas/${idCuenta}`);
  }

  crearCuenta(cuenta: CuentaRequest): Promise<Cuenta> {
    return this.apiClient.doPost(`${this.pathBase}/cuentas`, cuenta);
  }

  listaMediosPago(idCuenta: string): Promise<Array<MedioPago>> {
    return this.apiClient.doGet(`${this.pathBase}/cuentas/${idCuenta}/mediosPago`);
  }

  crearMedioPago(idCuenta: string, medioPago: MedioPagoRequest): Promise<MedioPago> {
    return this.apiClient.doPost(`${this.pathBase}/cuentas/${idCuenta}/mediosPago`, medioPago);
  }

  modificarMedioPago(idCuenta: string, idMedioPago: string, medioPago: MedioPagoRequest): Promise<MedioPago> {
    return this.apiClient.doPut(`${this.pathBase}/cuentas/${idCuenta}/mediosPago/${idMedioPago}`, medioPago);
  }

  borrarMedioPago(idCuenta: string, idMedioPago: string): Promise<void> {
    return this.apiClient.doDelete(`${this.pathBase}/cuentas/${idCuenta}/mediosPago/${idMedioPago}`);
  }

}
