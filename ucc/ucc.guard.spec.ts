import { TestBed, async, inject } from '@angular/core/testing';

import { UccGuard } from './ucc.guard';

describe('UccGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UccGuard]
    });
  });

  it('should ...', inject([UccGuard], (guard: UccGuard) => {
    expect(guard).toBeTruthy();
  }));
});
