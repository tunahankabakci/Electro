import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdctComponent } from './prdct.component';

describe('PrdctComponent', () => {
  let component: PrdctComponent;
  let fixture: ComponentFixture<PrdctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
