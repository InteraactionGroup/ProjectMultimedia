import { TestBed } from '@angular/core/testing';

import { StatusInternetService } from './status-internet.service';

describe('StatusInternetService', () => {
  let service: StatusInternetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusInternetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
