import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcategoriesComponent } from './cardcategories.component';

describe('CardcategoriesComponent', () => {
  let component: CardcategoriesComponent;
  let fixture: ComponentFixture<CardcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
