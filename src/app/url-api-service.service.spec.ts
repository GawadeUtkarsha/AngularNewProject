import { TestBed } from '@angular/core/testing';

import { UrlApiServiceService } from './url-api-service.service';

describe('UrlApiServiceService', () => {
  let service: UrlApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
