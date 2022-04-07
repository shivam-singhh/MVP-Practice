import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListPresentationComponent } from './customer-list-presentation.component';

describe('CustomerListPresentationComponent', () => {
  let component: CustomerListPresentationComponent;
  let fixture: ComponentFixture<CustomerListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
