import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGestionnaireComponent } from './welcome-gestionnaire.component';

describe('WelcomeGestionnaireComponent', () => {
  let component: WelcomeGestionnaireComponent;
  let fixture: ComponentFixture<WelcomeGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
