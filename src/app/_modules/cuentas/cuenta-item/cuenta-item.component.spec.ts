import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaItemComponent } from './cuenta-item.component';

describe('CuentaItemComponent', () => {
  let component: CuentaItemComponent;
  let fixture: ComponentFixture<CuentaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
