import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantComponent } from './encadrant.component';

describe('EncadrantComponent', () => {
  let component: EncadrantComponent;
  let fixture: ComponentFixture<EncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncadrantComponent]
    });
    fixture = TestBed.createComponent(EncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
