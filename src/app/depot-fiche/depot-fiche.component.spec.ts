import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotFicheComponent } from './depot-fiche.component';

describe('DepotFicheComponent', () => {
  let component: DepotFicheComponent;
  let fixture: ComponentFixture<DepotFicheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotFicheComponent]
    });
    fixture = TestBed.createComponent(DepotFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
