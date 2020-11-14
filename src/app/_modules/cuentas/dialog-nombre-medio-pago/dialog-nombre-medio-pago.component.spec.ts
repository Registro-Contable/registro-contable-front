import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNombreMedioPagoComponent } from './dialog-nombre-medio-pago.component';

describe('DialogNombreMedioPagoComponent', () => {
  let component: DialogNombreMedioPagoComponent;
  let fixture: ComponentFixture<DialogNombreMedioPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNombreMedioPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNombreMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
