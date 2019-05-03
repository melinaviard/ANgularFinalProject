import { TestBed } from '@angular/core/testing';

import { ResaServiceService } from './resa-service.service';

describe('ResaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResaServiceService = TestBed.get(ResaServiceService);
    expect(service).toBeTruthy();
  });
});
