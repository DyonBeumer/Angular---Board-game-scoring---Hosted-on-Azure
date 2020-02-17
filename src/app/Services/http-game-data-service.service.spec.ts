import { TestBed } from '@angular/core/testing';

import { HttpGameDataService } from './http-game-data-service.service';

describe('HttpGameDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpGameDataService = TestBed.get(HttpGameDataService);
    expect(service).toBeTruthy();
  });
});
