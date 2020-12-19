import { formatDate } from '@angular/common';
import { Component, Inject, isDevMode, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaResponse } from '../../core/models/categorias.models';
import { Cuenta } from '../../core/models/cuentas.models';
import { MovimientoRequest, MovimientoResponse, TipoMovimiento } from '../../core/models/movimientos.models';
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
    public dialogRef: MatDialogRef<DialogCrearMovimientoComponent>, private cuentasApiClient: CuentasApiClientService, private categoriasApiClient: CategoriasApiClienService,
    @Inject(MAT_DIALOG_DATA) private inputData?: MovimientoResponse) {
    this.horas = new Array(24).fill(24).map((_, i) => i);
    this.minutos = new Array(60).fill(60).map((_, i) => i);
    this.segundos = new Array(60).fill(60).map((_, i) => i);
    this.tiposMovimiento = [TipoMovimiento.INGRESO, TipoMovimiento.GASTO, TipoMovimiento.TRASPASO];

    if (isDevMode()) {
      console.log(inputData);
    }

    this.date = inputData ? new Date(inputData.fecha) : new Date();
    this.hora = this.date.getHours();
    this.minuto = this.date.getMinutes();
    this.segundo = this.date.getSeconds();

    if (inputData) {
      this.tipoMovimiento = TipoMovimiento[inputData.tipoMovimientoId];
      this.changeTipoMovimiento();
      this.data.cantidad = inputData.cantidad;
      this.data.concepto = inputData.concepto;
      this.data.nota = inputData.nota;
    }
  }

  ngOnInit(): void {
    this.cuentasRequest();
    this.changeHora();
  }

  changeHora(): void {
    this.date.setHours(this.hora);
    this.date.setMinutes(this.minuto);
    this.date.setSeconds(this.segundo);

    const date = formatDate(this.date, this.format, this.locale);
    this.data.fecha = date;

    if (isDevMode()) {
      console.log(this.data.fecha);
    }
  }

  parseTipoMovimiento(tipoMovimiento: TipoMovimiento): string {
    return TipoMovimiento[tipoMovimiento];
  }

  changeTipoMovimiento(): void {
    this.data.tipoMovimientoId = this.parseTipoMovimiento(this.tipoMovimiento);
    this.categoria = null;
    this.categoriasRequest();
    if (isDevMode()) {
      console.log(this.data.tipoMovimientoId);
    }
  }

  changeCuenta(): void {
    this.data.cuentaId = this.cuenta.id;
    if (isDevMode()) {
      console.log(this.data.cuentaId);
    }
  }

  changeCategoria(): void {
    this.data.categoriaId = this.categoria.id;
    if (isDevMode()) {
      console.log(this.data.categoriaId);
    }
  }

  get isCategoria(): boolean {
    return this.data.tipoMovimientoId === TipoMovimiento[TipoMovimiento.GASTO]
      || this.data.tipoMovimientoId === TipoMovimiento[TipoMovimiento.INGRESO];
  }

  private cuentasRequest(): void {
    this.cuentasApiClient.listaCuentas()
      .then(lista => {
        this.cuentas = lista;
        if (this.inputData) {
          this.cuenta = this.cuentas.find(c => c.id === this.inputData.cuenta.cuentaId);
          this.changeCuenta();
          this.data.medioPagoId = this.cuenta.mediosPago.find(mp => mp.id === this.inputData.cuenta.medioPago?.medioPagoId)?.id;
        }
      })
      .catch(err => console.log(err));
  }

  private categoriasRequest(): void {
    if (this.isCategoria) {
      this.categoriasApiClient.listaCategorias(this.data.tipoMovimientoId)
        .then(lista => {
          this.categorias = lista;
          if (this.inputData) {
            this.categoria = this.categorias.find(c => c.id === this.inputData.categoria.categoriaId);
            this.changeCategoria();
            this.data.subCategoriaId = this.categoria.subCategorias?.find(sc => sc.id === this.inputData.categoria.subCategoria?.subCategoriaId)?.id;
          }
        })
        .catch(err => console.log(err));
    }
  }

  onNoClick(): void {
    if (isDevMode()) {
      console.log('onNoClick');
    }
    this.dialogRef.close();
  }

  submit(): void {
    if (isDevMode()) {
      console.log(this.data);
      console.log(this.movimientosForm.valid);
    }
    if (this.movimientosForm.valid) {
      if (this.tipoMovimiento === TipoMovimiento.GASTO) {
        this.data.cantidad = this.data.cantidad * -1;
      }
      this.dialogRef.close(this.data);
    }
  }
}
