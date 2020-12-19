import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-crear-categoria',
  templateUrl: './dialog-crear-categoria.component.html',
  styleUrls: ['./dialog-crear-categoria.component.scss']
})
export class DialogCrearCategoriaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCrearCategoriaComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogCrearCategoriaData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialogRef.close(this.data.nombre);
  }
}

export interface DialogCrearCategoriaData {
  titulo: string;
  nombre?: string;
}
