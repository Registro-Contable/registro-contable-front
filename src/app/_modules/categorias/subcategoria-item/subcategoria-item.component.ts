import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubCategoriaRequest, SubCategoriaResponse } from '../../core/models/categorias.models';
import { CategoriasApiClienService } from '../../core/_services/categorias-api-clien.service';
import { DialogCrearCategoriaComponent } from '../dialog-crear-categoria/dialog-crear-categoria.component';

@Component({
  selector: 'app-subcategoria-item',
  templateUrl: './subcategoria-item.component.html',
  styleUrls: ['./subcategoria-item.component.scss']
})
export class SubcategoriaItemComponent implements OnInit {

  @Input()
  subcategoria: SubCategoriaResponse;
  @Output()
  refrescar = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog, private categoriasApiClient: CategoriasApiClienService) { }

  ngOnInit(): void {
  }

  openModificarSubcategoriaDialog(): void {
    const dialogRef = this.dialog.open(DialogCrearCategoriaComponent, {
      data: {
        titulo: `Modificar ${this.subcategoria.nombre}`,
        nombre: this.subcategoria.nombre
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var subcategoria: SubCategoriaRequest = {
          nombre: result,
        };
        this.categoriasApiClient.modificarSubcategoria(this.subcategoria.parentId, this.subcategoria.id, subcategoria)
          .then(_ => this.refrescar.emit(true))
          .catch(err => {
            console.log(err);
            alert("Error en la peticion");
          })
      }
    });
  }

  eliminarSubcategoria() {
    var confirm = window.confirm("¿Estas seguro de eliminar esta categoria?");
    if (confirm) {
      this.categoriasApiClient.eliminarSubcategoria(this.subcategoria.parentId, this.subcategoria.id)
        .then(_ => { this.refrescar.emit(true) })
        .catch(err => {
          console.log(err);
          alert("Error en la peticion");
        })
    }
  }

}
