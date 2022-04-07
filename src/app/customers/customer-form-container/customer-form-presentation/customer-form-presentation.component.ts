import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer, CustomerForm } from '../../customers.model';
import { CustomerFormPresenterService } from '../customer-form-presenter/customer-form-presenter.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.css'],
  viewProviders: [CustomerFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormPresentationComponent implements OnInit {

  @Input() public set customerData(value : Customer | null) {
    if (value) {
      this.formTitle = 'Edit Customer';
      this.customerForm.patchValue(value);
      this._customerData = value;
    }
  }
  public get customerData() : Customer | null {
    return this._customerData;
  }

  private _customerData!: Customer;

  @Output() public add: EventEmitter<CustomerForm>;
  @Output() public edit: EventEmitter<CustomerForm>;

  public customerForm: FormGroup;
  public formTitle: string;

  constructor(
    private customerFormPresenter: CustomerFormPresenterService,
    private location: Location
  ) { 
    this.customerForm = this.customerFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Customer'
  }

  ngOnInit(): void {
    this.customerFormPresenter.customerFormData$.subscribe((res: CustomerForm) => {
      this.formTitle === 'Add Customer' ? this.add.emit(res) : this.edit.emit(res);
    })
  }

  onSubmit() {
    console.log(this.customerForm,this.customerForm.value);
    
    // this.customerFormPresenter.onSubmit(this.customerForm)
  }
  onCancel() {
    this.location.back();
  }

}
