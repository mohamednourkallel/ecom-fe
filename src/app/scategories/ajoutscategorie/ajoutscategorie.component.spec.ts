import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutscategorieComponent } from './ajoutscategorie.component';

describe('AjoutscategorieComponent', () => {
  let component: AjoutscategorieComponent;
  let fixture: ComponentFixture<AjoutscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutscategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
