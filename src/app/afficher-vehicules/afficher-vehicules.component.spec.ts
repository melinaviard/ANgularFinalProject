import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherVehiculesComponent } from './afficher-vehicules.component';

describe('AfficherVehiculesComponent', () => {
  let component: AfficherVehiculesComponent;
  let fixture: ComponentFixture<AfficherVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
