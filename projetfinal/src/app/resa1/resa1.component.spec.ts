import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resa1Component } from './resa1.component';

describe('Resa1Component', () => {
  let component: Resa1Component;
  let fixture: ComponentFixture<Resa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
