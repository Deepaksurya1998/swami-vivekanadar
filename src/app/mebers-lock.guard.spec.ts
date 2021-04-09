import { TestBed } from '@angular/core/testing';

import { MebersLockGuard } from './mebers-lock.guard';

describe('MebersLockGuard', () => {
  let guard: MebersLockGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MebersLockGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
