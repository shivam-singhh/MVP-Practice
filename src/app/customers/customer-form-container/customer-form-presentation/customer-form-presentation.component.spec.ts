import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormPresentationComponent } from './customer-form-presentation.component';

describe('CustomerFormPresentationComponent', () => {
  let component: CustomerFormPresentationComponent;
  let fixture: ComponentFixture<CustomerFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
