import { TestBed, inject } from '@angular/core/testing';

import { EnginemanageService } from './enginemanage.service';

describe('EnginemanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnginemanageService]
    });
  });

  it('should be created', inject([EnginemanageService], (service: EnginemanageService) => {
    expect(service).toBeTruthy();
  }));
});
