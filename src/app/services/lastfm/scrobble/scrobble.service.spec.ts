import { TestBed } from '@angular/core/testing';

import { ScrobbleService } from './scrobble.service';

describe('ScrobbleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrobbleService = TestBed.get(ScrobbleService);
    expect(service).toBeTruthy();
  });
});
