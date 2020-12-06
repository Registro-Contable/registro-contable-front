import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMesesComponent } from './selector-meses.component';

describe('SelectorMesesComponent', () => {
  let component: SelectorMesesComponent;
  let fixture: ComponentFixture<SelectorMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorMesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
