import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearCuentaComponent } from './dialog-crear-cuenta.component';

describe('DialogCrearCuentaComponent', () => {
  let component: DialogCrearCuentaComponent;
  let fixture: ComponentFixture<DialogCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
