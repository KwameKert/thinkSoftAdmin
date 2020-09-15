import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRiderComponent } from './view-rider.component';

describe('ViewRiderComponent', () => {
  let component: ViewRiderComponent;
  let fixture: ComponentFixture<ViewRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
