import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaRequest, CategoriaResponse, SubCategoriaRequest } from '../../core/models/categorias.models';
import { CategoriasApiClienService } from '../../core/_services/categorias-api-clien.service';
import { DialogCrearCategoriaComponent } from '../dialog-crear-categoria/dialog-crear-categoria.component';

@Component({
  selector: 'app-categoria-item',
  templateUrl: './categoria-item.component.html',
  styleUrls: ['./categoria-item.component.scss']
})
export class CategoriaItemComponent implements OnInit {

  @Input()
  categoria: CategoriaResponse;
  panelOpenState = false;

  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private categoriasApiClient: CategoriasApiClienService) { }

  ngOnInit(): void {
  }

  procesaRefrescar(refrescar) {
    this.refrescar.emit(refrescar);
  }

  eliminarCategoria() {
    var confirm = window.confirm("¿Estas seguro de eliminar esta categoria?");
    if (confirm) {
      this.categoriasApiClient.eliminarCategoria(this.categoria.id)
        .then(_ => { this.refrescar.emit(true) })
        .catch(err => {
          console.log(err);
          alert("Error en la peticion");
        })
    }
  }

  openModificarCategoriaDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearCategoriaComponent, {
      data: {
        titulo: `Modificar ${this.categoria.nombre}`,
        nombre: this.categoria.nombre
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var categoria: CategoriaRequest = {
          nombre: result,
        };
        this.categoriasApiClient.modificarCategoria(this.categoria.id, categoria)
          .then(_ => this.refrescar.emit(true))
          .catch(err => {
            console.log(err);
            alert("Error en la peticion");
          })
      }
    });
  }

  openCrearSubcategoriaDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearCategoriaComponent, {
      data: {
        titulo: `Crear subcategoria`,
        nombre: ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var categoria: SubCategoriaRequest = {
          nombre: result,
        };
        this.categoriasApiClient.addSubcategoria(this.categoria.id, categoria)
          .then(res => this.categoria = res)
          .catch(err => {
            console.log(err);
            alert("Error en la peticion");
          })
      }
    });
  }
}
