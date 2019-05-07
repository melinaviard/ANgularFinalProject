import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifResa2Component } from './modif-resa2.component';

describe('ModifResa2Component', () => {
  let component: ModifResa2Component;
  let fixture: ComponentFixture<ModifResa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifResa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifResa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

