import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluerEtudiantComponent } from './evaluer-etudiant.component';

describe('EvaluerEtudiantComponent', () => {
  let component: EvaluerEtudiantComponent;
  let fixture: ComponentFixture<EvaluerEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluerEtudiantComponent]
    });
    fixture = TestBed.createComponent(EvaluerEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
