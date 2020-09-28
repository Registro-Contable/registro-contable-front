import { Component, OnInit } from '@angular/core';
import { Cuenta, TipoCuenta } from '../cuentas.models';
import { CuentasApiClientService } from '../_services/cuentas-api-client.service';

@Component({
  selector: 'app-cuentas-main',
  templateUrl: './cuentas-main.component.html',
  styleUrls: ['./cuentas-main.component.scss']
})
export class CuentasMainComponent implements OnInit {

  cuentas: Map<TipoCuenta, Array<Cuenta>> = new Map();

  constructor(cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
  }

}
