import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemplirFicheComponent } from './remplir-fiche.component';

describe('RemplirFicheComponent', () => {
  let component: RemplirFicheComponent;
  let fixture: ComponentFixture<RemplirFicheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemplirFicheComponent]
    });
    fixture = TestBed.createComponent(RemplirFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
