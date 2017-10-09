import { TestBed, inject } from '@angular/core/testing';

import { DevicemanageService } from './devicemanage.service';

describe('DevicemanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicemanageService]
    });
  });

  it('should be created', inject([DevicemanageService], (service: DevicemanageService) => {
    expect(service).toBeTruthy();
  }));
});
