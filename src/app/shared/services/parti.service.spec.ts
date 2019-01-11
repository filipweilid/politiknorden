import { TestBed } from '@angular/core/testing';

import { PartiService } from './parti.service';

describe('PartiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartiService = TestBed.get(PartiService);
    expect(service).toBeTruthy();
  });
});
