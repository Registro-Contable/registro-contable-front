import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cuenta } from '../cuentas.models';
import { DialogNombreCuentaComponent } from '../dialog-nombre-cuenta/dialog-nombre-cuenta.component';

@Component({
  selector: 'app-cuenta-item',
  templateUrl: './cuenta-item.component.html',
  styleUrls: ['./cuenta-item.component.scss']
})
export class CuentaItemComponent implements OnInit {

  @Input("cuenta")
  cuenta: Cuenta;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRenombrarDialog(): void {
    const dialogRef = this.dialog.open(DialogNombreCuentaComponent, {
      width: '250px',
      data: { titulo: this.cuenta.nombre, nombre: this.cuenta.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert(result);
      }
    });
  }

}
