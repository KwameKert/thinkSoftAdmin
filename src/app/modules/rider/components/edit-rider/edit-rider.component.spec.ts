import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRiderComponent } from './edit-rider.component';

describe('EditRiderComponent', () => {
  let component: EditRiderComponent;
  let fixture: ComponentFixture<EditRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
