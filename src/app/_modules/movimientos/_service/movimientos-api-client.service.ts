import { formatDate } from "@angular/common";
import { Injectable, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiClientService } from '../../core/_services/api-client.service';
import { MovimientoResponse, TipoMovimiento } from '../movimientos.models';

@Injectable({
  providedIn: 'root'
})
export class MovimientosApiClientService {

  private readonly format = 'yyyy-MM-dd HH:mm:ss';
  private readonly locale = 'en_US';

  private readonly pathBase = environment.api.services_url.movimientos_service;

  constructor(private apiClient: ApiClientService) { }

  listaMovimientos(options: {
    tipoMovimiento?: TipoMovimiento,
    cuentaId?: string;
    fromDate?: Date;
    toDate?: Date;
  }): Promise<Array<MovimientoResponse>> {
    var path = `${this.pathBase}`;
    var prepend = '?';
    if (options.tipoMovimiento) {
      path = `${path}${prepend}tipoMovimiento=${options.tipoMovimiento}`;
      prepend = '&';
    }
    if (options.cuentaId) {
      path = `${path}${prepend}cuentaId=${options.cuentaId}`;
      prepend = '&';
    }
    if (options.fromDate) {
      var date = formatDate(options.fromDate, this.format, this.locale);
      path = `${path}${prepend}fromDate=${encodeURIComponent(date)}`;
      prepend = '&';
    }
    if (options.toDate) {
      var date = formatDate(options.toDate, this.format, this.locale);
      path = `${path}${prepend}toDate=${encodeURIComponent(date)}`;
    }
    return this.apiClient.doGet(path);
  }
}
