import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditscategorieComponent } from './editscategorie.component';

describe('EditscategorieComponent', () => {
  let component: EditscategorieComponent;
  let fixture: ComponentFixture<EditscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditscategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
