import { TestBed } from '@angular/core/testing';

import { FirebaeService } from './firebae.service';

describe('FirebaeService', () => {
  let service: FirebaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
