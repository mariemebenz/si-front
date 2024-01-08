import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEvaluationComponent } from './etudiant-evaluation.component';

describe('EtudiantEvaluationComponent', () => {
  let component: EtudiantEvaluationComponent;
  let fixture: ComponentFixture<EtudiantEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantEvaluationComponent]
    });
    fixture = TestBed.createComponent(EtudiantEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
