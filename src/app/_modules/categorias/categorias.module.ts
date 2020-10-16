import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasMainComponent } from './categorias-main/categorias-main.component';
import { CategoriasToolbarComponent } from './categorias-toolbar/categorias-toolbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { GrupoCategoriasComponent } from './grupo-categorias/grupo-categorias.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategoriaItemComponent } from './categoria-item/categoria-item.component';
import { MatCardModule } from '@angular/material/card';
import { SubcategoriaItemComponent } from './subcategoria-item/subcategoria-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';








@NgModule({
  declarations: [CategoriasMainComponent, CategoriasToolbarComponent, GrupoCategoriasComponent, CategoriaItemComponent, SubcategoriaItemComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    CategoriasMainComponent
  ]
})
export class CategoriasModule { }
