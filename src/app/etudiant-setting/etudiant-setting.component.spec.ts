import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantSettingComponent } from './etudiant-setting.component';

describe('EtudiantSettingComponent', () => {
  let component: EtudiantSettingComponent;
  let fixture: ComponentFixture<EtudiantSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantSettingComponent]
    });
    fixture = TestBed.createComponent(EtudiantSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
