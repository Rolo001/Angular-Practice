import { TestBed } from '@angular/core/testing';

import { GetdetailsService } from './getdetails.service';

describe('GetdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdetailsService = TestBed.get(GetdetailsService);
    expect(service).toBeTruthy();
  });
});
