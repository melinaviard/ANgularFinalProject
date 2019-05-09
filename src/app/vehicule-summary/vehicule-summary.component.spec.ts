import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeSummaryComponent } from './vehicule-summary.component';

describe('VehiculeSummaryComponent', () => {
  let component: VehiculeSummaryComponent;
  let fixture: ComponentFixture<VehiculeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
