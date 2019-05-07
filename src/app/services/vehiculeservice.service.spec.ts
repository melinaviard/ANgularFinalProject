import { TestBed } from '@angular/core/testing';

import { VehiculeserviceService } from './vehiculeservice.service';

describe('VehiculeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiculeserviceService = TestBed.get(VehiculeserviceService);
    expect(service).toBeTruthy();
  });
});
