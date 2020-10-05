import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-nombre-cuenta',
  templateUrl: './dialog-nombre-cuenta.component.html',
  styleUrls: ['./dialog-nombre-cuenta.component.scss']
})
export class DialogNombreCuentaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogNombreCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogNombreCuentaData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogNombreCuentaData {
  titulo: string;
  nombre: string;
}
