import { TestBed } from '@angular/core/testing';

import { AwsSeviceService } from './aws-sevice.service';

describe('AwsSeviceService', () => {
  let service: AwsSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
