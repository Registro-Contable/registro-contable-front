import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MovimientosDiariosGroupComponent } from './movimientos-diarios-group/movimientos-diarios-group.component';
import { MovimientosMainComponent } from './movimientos-main/movimientos-main.component';
import { MovimientosToolbarComponent } from './movimientos-toolbar/movimientos-toolbar.component';
import { ResumenBalanceComponent } from './resumen-balance/resumen-balance.component';
import { MovimientosDiariosDiaComponent } from './movimientos-diarios-dia/movimientos-diarios-dia.component';
import { SelectorMesesComponent } from './selector-meses/selector-meses.component';
import { MovimientosDiariosMovimientoComponent } from './movimientos-diarios-movimiento/movimientos-diarios-movimiento.component';



@NgModule({
  declarations: [MovimientosMainComponent, MovimientosToolbarComponent, MovimientosDiariosGroupComponent, ResumenBalanceComponent, MovimientosDiariosDiaComponent, SelectorMesesComponent, MovimientosDiariosMovimientoComponent],
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
    MovimientosMainComponent
  ],
  providers: []
})
export class MovimientosModule { }
