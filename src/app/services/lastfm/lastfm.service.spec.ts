import { TestBed } from '@angular/core/testing';

import { LastfmService } from './lastfm.service';

describe('BaselestfmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastfmService = TestBed.get(LastfmService);
    expect(service).toBeTruthy();
  });
});
