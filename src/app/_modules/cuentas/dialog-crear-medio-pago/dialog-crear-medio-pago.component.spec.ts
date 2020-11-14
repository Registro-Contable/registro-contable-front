import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearMedioPagoComponent } from './dialog-crear-medio-pago.component';

describe('DialogCrearMedioPagoComponent', () => {
  let component: DialogCrearMedioPagoComponent;
  let fixture: ComponentFixture<DialogCrearMedioPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearMedioPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
