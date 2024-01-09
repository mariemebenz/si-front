import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirEtudiantComponent } from './choisir-etudiant.component';

describe('ChoisirEtudiantComponent', () => {
  let component: ChoisirEtudiantComponent;
  let fixture: ComponentFixture<ChoisirEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoisirEtudiantComponent]
    });
    fixture = TestBed.createComponent(ChoisirEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
