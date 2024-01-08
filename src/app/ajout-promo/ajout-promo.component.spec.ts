import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPromoComponent } from './ajout-promo.component';

describe('AjoutPromoComponent', () => {
  let component: AjoutPromoComponent;
  let fixture: ComponentFixture<AjoutPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutPromoComponent]
    });
    fixture = TestBed.createComponent(AjoutPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
