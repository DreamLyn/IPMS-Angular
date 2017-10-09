import { TestBed, inject } from '@angular/core/testing';

import { DevicestateService } from './devicestate.service';

describe('DevicestateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicestateService]
    });
  });

  it('should be created', inject([DevicestateService], (service: DevicestateService) => {
    expect(service).toBeTruthy();
  }));
});
