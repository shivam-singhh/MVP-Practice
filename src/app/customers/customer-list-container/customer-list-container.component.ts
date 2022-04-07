import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customers.model';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.css']
})
export class CustomerListContainerComponent implements OnInit {

  public customerList$: Observable<Customer[]>;

  constructor(
    private customerService: CustomersService
  ) {
    this.customerList$ = new Observable();
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerList$ = this.customerService.getCustomers();
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe((res: any) => {
      console.log(res);
      this.getCustomers();
    });
  }

}
