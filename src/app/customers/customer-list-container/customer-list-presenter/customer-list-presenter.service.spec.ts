import { TestBed } from '@angular/core/testing';

import { CustomerListPresenterService } from './customer-list-presenter.service';

describe('CustomerListPresenterService', () => {
  let service: CustomerListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
