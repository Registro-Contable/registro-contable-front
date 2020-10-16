import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaItemComponent } from './subcategoria-item.component';

describe('SubcategoriaItemComponent', () => {
  let component: SubcategoriaItemComponent;
  let fixture: ComponentFixture<SubcategoriaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
