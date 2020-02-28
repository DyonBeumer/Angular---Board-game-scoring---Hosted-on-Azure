import { TestBed } from '@angular/core/testing';

import { HttpUserDataServiceService } from './http-user-data-service.service';

describe('HttpUserDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUserDataServiceService = TestBed.get(HttpUserDataServiceService);
    expect(service).toBeTruthy();
  });
});
