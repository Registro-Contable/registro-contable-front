import { formatDate } from '@angular/common';
import { Component, isDevMode, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriaResponse } from '../../core/models/categorias.models';
import { Cuenta } from '../../core/models/cuentas.models';
import { MovimientoRequest, TipoMovimiento } from '../../core/models/movimientos.models';
import { CategoriasApiClienService } from '../../core/_services/categorias-api-clien.service';
import { CuentasApiClientService } from '../../core/_services/cuentas-api-client.service';

@Component({
  selector: 'app-dialog-crear-movimiento',
  templateUrl: './dialog-crear-movimiento.component.html',
  styleUrls: ['./dialog-crear-movimiento.component.scss'],
})
export class DialogCrearMovimientoComponent implements OnInit {

  private readonly format = 'yyyy-MM-dd HH:mm:ss';
  private readonly locale = 'en_US';

  readonly horas: Array<number>;
  readonly minutos: Array<number>;
  readonly segundos: Array<number>;
  readonly tiposMovimiento: Array<TipoMovimiento>;

  cuentas: Array<Cuenta>;
  categorias: Array<CategoriaResponse>;

  data: MovimientoRequest = {};

  date: Date;
  hora: number;
  minuto: number;
  segundo: number;
  tipoMovimiento: TipoMovimiento;
  cuenta: Cuenta;
  categoria: CategoriaResponse;

  dateFormControl = new FormControl('', [Validators.required]);
  horaFormControl = new FormControl('', [Validators.required]);
  minutoFormControl = new FormControl('', [Validators.required]);
  segundoFormControl = new FormControl('', [Validators.required]);
  tipoFormControl = new FormControl('', [Validators.required]);
  categoriaFormControl = new FormControl('', [Validators.required]);
  subCategoriaFormControl = new FormControl('', []);
  cuentaFormControl = new FormControl('', [Validators.required]);
  medioPagoFormControl = new FormControl('', []);
  cantidadFormControl = new FormControl('', [Validators.required]);
  conceptoFormControl = new FormControl('', []);
  notaFormControl = new FormControl('', []);

  movimientosForm: FormGroup = new FormGroup({
    date: this.dateFormControl,
    hora: this.horaFormControl,
    minuto: this.minutoFormControl,
    segundo: this.segundoFormControl,
    tipo: this.tipoFormControl,
    cuenta: this.cuentaFormControl,
    medioPago: this.medioPagoFormControl,
    categoria: this.categoriaFormControl,
    subCategoria: this.subCategoriaFormControl,
    cantidad: this.cantidadFormControl,
    concepto: this.conceptoFormControl,
    nota: this.notaFormControl
  });

  constructor(
    public dialogRef: MatDialogRef<DialogCrearMovimientoComponent>, private cuentasApiClient: CuentasApiClientService, private categoriasApiClient: CategoriasApiClienService) {
    this.horas = new Array(24).fill(24).map((_, i) => i);
    this.minutos = new Array(60).fill(60).map((_, i) => i);
    this.segundos = new Array(60).fill(60).map((_, i) => i);
    this.tiposMovimiento = [TipoMovimiento.INGRESO, TipoMovimiento.GASTO, TipoMovimiento.TRASPASO];

    this.date = new Date();
    this.hora = this.date.getHours();
    this.minuto = this.date.getMinutes();
    this.segundo = this.date.getSeconds();
  }

  ngOnInit(): void {
    this.cuentasRequest();
    this.changeHora();
  }

  changeHora() {
    this.date.setHours(this.hora);
    this.date.setMinutes(this.minuto);
    this.date.setSeconds(this.segundo);

    var date = formatDate(this.date, this.format, this.locale);
    this.data.fecha = date;

    if (isDevMode()) {
      console.log(this.data.fecha);
    }
  }

  parseTipoMovimiento(tipoMovimiento: TipoMovimiento): string {
    return TipoMovimiento[tipoMovimiento];
  }

  changeTipoMovimiento() {
    this.data.tipoMovimientoId = this.parseTipoMovimiento(this.tipoMovimiento);
    this.categoria = null;
    this.categoriasRequest();
    if (isDevMode()) {
      console.log(this.data.tipoMovimientoId);
    }
  }

  changeCuenta() {
    this.data.cuentaId = this.cuenta.id;
    if (isDevMode()) {
      console.log(this.data.cuentaId);
    }
  }

  changeCategoria() {
    this.data.categoriaId = this.categoria.id;
    if (isDevMode()) {
      console.log(this.data.categoriaId);
    }
  }

  get isCategoria(): boolean {
    return this.data.tipoMovimientoId == TipoMovimiento[TipoMovimiento.GASTO]
      || this.data.tipoMovimientoId == TipoMovimiento[TipoMovimiento.INGRESO]
  }

  private cuentasRequest() {
    this.cuentasApiClient.listaCuentas()
      .then(lista => this.cuentas = lista)
      .catch(err => console.log(err));
  }

  private categoriasRequest() {
    if (this.isCategoria) {
      this.categoriasApiClient.listaCategorias(this.data.tipoMovimientoId)
        .then(lista => this.categorias = lista)
        .catch(err => console.log(err));
    }
  }

  onNoClick(): void {
    if (isDevMode()) {
      console.log('onNoClick');
    }
    this.dialogRef.close();
  }

  submit() {
    if (isDevMode()) {
      console.log(this.data);
      console.log(this.movimientosForm.valid);
    }
    if (this.movimientosForm.valid) {
      if (this.tipoMovimiento == TipoMovimiento.GASTO) {
        this.data.cantidad = this.data.cantidad * -1;
      }
      this.dialogRef.close(this.data);
    }
  }
}
