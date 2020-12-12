import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearMovimientoComponent } from './dialog-crear-movimiento.component';

describe('DialogCrearMovimientoComponent', () => {
  let component: DialogCrearMovimientoComponent;
  let fixture: ComponentFixture<DialogCrearMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
