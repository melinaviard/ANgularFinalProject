import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resa1suiteComponent } from './resa1suite.component';

describe('Resa1suiteComponent', () => {
  let component: Resa1suiteComponent;
  let fixture: ComponentFixture<Resa1suiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resa1suiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resa1suiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
