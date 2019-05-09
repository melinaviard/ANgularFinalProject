import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resa2Component } from './resa2.component';

describe('Resa2Component', () => {
  let component: Resa2Component;
  let fixture: ComponentFixture<Resa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
