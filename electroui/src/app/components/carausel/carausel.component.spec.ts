import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarauselComponent } from './carausel.component';

describe('CarauselComponent', () => {
  let component: CarauselComponent;
  let fixture: ComponentFixture<CarauselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarauselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarauselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
