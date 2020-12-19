import { Component, OnInit } from '@angular/core';
import { Cuenta, TipoCuenta } from '../../core/models/cuentas.models';
import { CuentasApiClientService } from '../../core/_services/cuentas-api-client.service';

@Component({
  selector: 'app-cuentas-main',
  templateUrl: './cuentas-main.component.html',
  styleUrls: ['./cuentas-main.component.scss']
})
export class CuentasMainComponent implements OnInit {

  tipoCuentas: Map<string, TipoCuenta> = new Map();
  cuentasMap: Map<string, Array<Cuenta>> = new Map();

  constructor(private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
    this.listaCuentasRequest();
  }

  procesaRefrescar(refrescar): void {
    if (refrescar) {
      this.listaCuentasRequest();
    }
  }

  get capitalTotal(): number {
    let sum = 0;
    this.cuentasMap.forEach((v, k) => {
      v.forEach(c => {
        if (c.capitalCuenta && c.capitalCuenta.capital > 0) {
          sum += c.capitalCuenta.capital;
        }
      });
    });
    return sum;
  }

  get deberTotal(): number {
    let sum = 0;
    this.cuentasMap.forEach((v, k) => {
      v.forEach(c => {
        if (c.capitalCuenta && c.capitalCuenta.capital < 0) {
          sum += c.capitalCuenta.capital;
        }
      });
    });
    return sum;
  }

  private listaCuentasRequest(): void {
    this.cuentasApiClient.listaCuentas()
      .then(data => {
        this.tipoCuentas = new Map();
        this.cuentasMap = new Map();
        data.forEach(c => {
          if (c.tipoCuenta) {
            this.tipoCuentas.set(c.tipoCuenta.id, c.tipoCuenta);

            let array = this.cuentasMap.get(c.tipoCuenta.id);
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
      });
  }

  private getCapitalRequest(c: Cuenta): void {
    this.cuentasApiClient.capitalCuenta(c.id)
      .then(data => {
        c.capitalCuenta = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
