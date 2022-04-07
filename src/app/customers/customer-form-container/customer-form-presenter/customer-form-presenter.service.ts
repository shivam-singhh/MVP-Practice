import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { CustomerForm } from '../../customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormPresenterService {
  private customerFormData: Subject<CustomerForm>;
  public customerFormData$: Observable<CustomerForm>;
  constructor(
    private fb: FormBuilder
  ) { 
    this.customerFormData = new Subject();
    this.customerFormData$ = new Observable();

    this.customerFormData$ = this.customerFormData.asObservable();
  }

  buildForm() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  onSubmit(customerForm: FormGroup) {
    if (!customerForm.valid) {
      return
    }

    this.customerFormData.next(customerForm.value);
  }
}
