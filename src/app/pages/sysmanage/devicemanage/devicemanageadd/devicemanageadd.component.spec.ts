import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicemanageaddComponent } from './devicemanageadd.component';

describe('DevicemanageaddComponent', () => {
  let component: DevicemanageaddComponent;
  let fixture: ComponentFixture<DevicemanageaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicemanageaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicemanageaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
