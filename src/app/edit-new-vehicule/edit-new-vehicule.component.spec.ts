import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewVehiculeComponent } from './edit-new-vehicule.component';

describe('EditNewVehiculeComponent', () => {
  let component: EditNewVehiculeComponent;
  let fixture: ComponentFixture<EditNewVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
