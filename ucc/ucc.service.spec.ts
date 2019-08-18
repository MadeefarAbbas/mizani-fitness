import { TestBed } from '@angular/core/testing';

import { UccService } from './ucc.service';

describe('UccService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UccService = TestBed.get(UccService);
    expect(service).toBeTruthy();
  });
});
