import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierResaComponent } from './modifier-resa.component';

describe('ModifierResaComponent', () => {
  let component: ModifierResaComponent;
  let fixture: ComponentFixture<ModifierResaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierResaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
