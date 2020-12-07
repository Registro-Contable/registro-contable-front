import { Component, OnInit } from '@angular/core';
import { Cuenta, TipoCuenta } from '../cuentas.models';
import { CuentasApiClientService } from '../_services/cuentas-api-client.service';

@Component({
  selector: 'app-cuentas-main',
  templateUrl: './cuentas-main.component.html',
  styleUrls: ['./cuentas-main.component.scss']
})
export class CuentasMainComponent implements OnInit {

  tipoCuentas: Map<String, TipoCuenta> = new Map();
  cuentasMap: Map<String, Array<Cuenta>> = new Map();

  constructor(private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
    this.listaCuentasRequest();
  }

  procesaRefrescar(refrescar) {
    if (refrescar) {
      this.listaCuentasRequest();
    }
  }

  get capitalTotal(): number {
    var sum = 0
    this.cuentasMap.forEach((v, k) => {
      v.forEach(c => {
        if (c.capitalCuenta && c.capitalCuenta.capital > 0) {
          sum += c.capitalCuenta.capital
        }
      })
    })
    return sum;
  }

  get deberTotal(): number {
    var sum = 0
    this.cuentasMap.forEach((v, k) => {
      v.forEach(c => {
        if (c.capitalCuenta && c.capitalCuenta.capital < 0) {
          sum += c.capitalCuenta.capital
        }
      })
    })
    return sum;
  }

  private listaCuentasRequest() {
    this.cuentasApiClient.listaCuentas()
      .then(data => {
        this.tipoCuentas = new Map();
        this.cuentasMap = new Map();
        data.forEach(c => {
          if (c.tipoCuenta) {
            this.tipoCuentas.set(c.tipoCuenta.id, c.tipoCuenta);

            var array = this.cuentasMap.get(c.tipoCuenta.id);
            if (!array) {
              array = [];
            }

            this.getCapitalRequest(c);

            array.push(c);
            this.cuentasMap.set(c.tipoCuenta.id, array);
          }
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      })
  }

  private getCapitalRequest(c: Cuenta) {
    this.cuentasApiClient.capitalCuenta(c.id)
      .then(data => {
        c.capitalCuenta = data;
      })
      .catch(err => {
        console.log(err);
      })
  }

}
