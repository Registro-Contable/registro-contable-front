import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNombreCuentaComponent } from './dialog-nombre-cuenta.component';

describe('DialogNombreCuentaComponent', () => {
  let component: DialogNombreCuentaComponent;
  let fixture: ComponentFixture<DialogNombreCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNombreCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNombreCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
