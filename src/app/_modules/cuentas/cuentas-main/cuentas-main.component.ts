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

  get capitalTotal(): number {
    var sum = 0
    this.cuentasMap.forEach((v, k) => {
      v.forEach(c => {
        if (c.capital > 0) {
          sum += c.capital
        }
      })
    })
    return sum;
  }

  get deberTotal(): number {
    var sum = 0
    this.cuentasMap.forEach((v, k) => {
      v.forEach(c => {
        if (c.capital < 0) {
          sum += c.capital
        }
      })
    })
    return sum;
  }

  private listaCuentasRequest() {
    this.cuentasApiClient.listaCuentas()
      .then(data => {
        data.forEach(c => {
          if (c.tipoCuenta) {
            this.tipoCuentas.set(c.tipoCuenta.id, c.tipoCuenta);

            var array = this.cuentasMap.get(c.tipoCuenta.id);
            if (!array) {
              array = [];
            }

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

}
