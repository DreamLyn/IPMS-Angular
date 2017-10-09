import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicemanageComponent } from './devicemanage.component';

describe('DevicemanageComponent', () => {
  let component: DevicemanageComponent;
  let fixture: ComponentFixture<DevicemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
