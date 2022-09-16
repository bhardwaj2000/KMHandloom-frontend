import { TestBed } from '@angular/core/testing';

import { KmserviceService } from './kmservice.service';

describe('KmserviceService', () => {
  let service: KmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
