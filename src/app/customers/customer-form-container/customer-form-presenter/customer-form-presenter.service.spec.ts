import { TestBed } from '@angular/core/testing';

import { CustomerFormPresenterService } from './customer-form-presenter.service';

describe('CustomerFormPresenterService', () => {
  let service: CustomerFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
