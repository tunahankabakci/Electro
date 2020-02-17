import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdctsComponent } from './prdcts.component';

describe('PrdctsComponent', () => {
  let component: PrdctsComponent;
  let fixture: ComponentFixture<PrdctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
