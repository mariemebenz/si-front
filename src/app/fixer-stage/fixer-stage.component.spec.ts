import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixerStageComponent } from './fixer-stage.component';

describe('FixerStageComponent', () => {
  let component: FixerStageComponent;
  let fixture: ComponentFixture<FixerStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixerStageComponent]
    });
    fixture = TestBed.createComponent(FixerStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
