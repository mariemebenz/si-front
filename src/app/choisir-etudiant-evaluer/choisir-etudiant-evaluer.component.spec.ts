import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirEtudiantEvaluerComponent } from './choisir-etudiant-evaluer.component';

describe('ChoisirEtudiantEvaluerComponent', () => {
  let component: ChoisirEtudiantEvaluerComponent;
  let fixture: ComponentFixture<ChoisirEtudiantEvaluerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoisirEtudiantEvaluerComponent]
    });
    fixture = TestBed.createComponent(ChoisirEtudiantEvaluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
