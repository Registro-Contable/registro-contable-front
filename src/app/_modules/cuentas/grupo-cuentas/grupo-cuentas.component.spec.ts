import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoCuentasComponent } from './grupo-cuentas.component';

describe('GrupoCuentasComponent', () => {
  let component: GrupoCuentasComponent;
  let fixture: ComponentFixture<GrupoCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
