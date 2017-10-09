import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicestateComponent } from './devicestate.component';

describe('DevicestateComponent', () => {
  let component: DevicestateComponent;
  let fixture: ComponentFixture<DevicestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
