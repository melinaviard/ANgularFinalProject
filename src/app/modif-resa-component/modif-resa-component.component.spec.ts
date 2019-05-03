import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifResaComponentComponent } from './modif-resa-component.component';

describe('ModifResaComponentComponent', () => {
  let component: ModifResaComponentComponent;
  let fixture: ComponentFixture<ModifResaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifResaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifResaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
