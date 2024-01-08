import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirTypeComponent } from './choisir-type.component';

describe('ChoisirTypeComponent', () => {
  let component: ChoisirTypeComponent;
  let fixture: ComponentFixture<ChoisirTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoisirTypeComponent]
    });
    fixture = TestBed.createComponent(ChoisirTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
