import { TestBed } from '@angular/core/testing';

import { LocalstorageservicesService } from './localstorageservices.service';

describe('LocalstorageservicesService', () => {
  let service: LocalstorageservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
