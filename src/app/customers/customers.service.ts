import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customers')
  }

  public getCustomerById(id: string):Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3000/customers/${id}`);
  }

  public deleteCustomer(id: number): any {
    return this.http.delete<any>(`http://localhost:3000/customers/${id}`)
  }

  public addCustomer(form: any): any {
    return this.http.post<any>(`http://localhost:3000/customers`, form)
  }

  public editCustomer(form: any, id: string): any {
    return this.http.put<any>(`http://localhost:3000/customers/${id}`, form)
  }

}
