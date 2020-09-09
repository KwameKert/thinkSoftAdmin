import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRidersComponent } from './list-riders.component';

describe('ListRidersComponent', () => {
  let component: ListRidersComponent;
  let fixture: ComponentFixture<ListRidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
