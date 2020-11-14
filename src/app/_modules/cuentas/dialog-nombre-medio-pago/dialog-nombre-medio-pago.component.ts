import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-nombre-medio-pago',
  templateUrl: './dialog-nombre-medio-pago.component.html',
  styleUrls: ['./dialog-nombre-medio-pago.component.scss']
})
export class DialogNombreMedioPagoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogNombreMedioPagoComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogNombreMedioPagoData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogNombreMedioPagoData {
  nombre?: string;
}