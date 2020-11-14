import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MedioPago } from '../cuentas.models';
import { CuentasApiClientService } from '../_services/cuentas-api-client.service';

@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.component.html',
  styleUrls: ['./medio-pago.component.scss']
})
export class MedioPagoComponent implements OnInit {

  @Input()
  medioPago: MedioPago;

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(private cuentasApiClient: CuentasApiClientService) { }

  ngOnInit(): void {
  }

  eliminarSubcategoria() {
    var confirm = window.confirm("¿Estas seguro de eliminar este medio pago?");
    if (confirm) {
      this.cuentasApiClient.borrarMedioPago(this.medioPago.cuentaId, this.medioPago.id)
        .then(_ => { this.refrescar.emit(true) })
        .catch(err => {
          console.log(err);
          alert("Error en la peticion");
        })
    }
  }
}
