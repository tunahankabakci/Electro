import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingWidgetComponent } from './top-selling-widget.component';

describe('TopSellingWidgetComponent', () => {
  let component: TopSellingWidgetComponent;
  let fixture: ComponentFixture<TopSellingWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSellingWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
