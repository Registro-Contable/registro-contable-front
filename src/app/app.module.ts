import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthModule } from './_modules/auth/auth.module';
import { CuentasModule } from './_modules/cuentas/cuentas.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CuentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
