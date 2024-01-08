import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotRenduComponent } from './depot-rendu.component';

describe('DepotRenduComponent', () => {
  let component: DepotRenduComponent;
  let fixture: ComponentFixture<DepotRenduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotRenduComponent]
    });
    fixture = TestBed.createComponent(DepotRenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
