import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../customers.model';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.css'],
  viewProviders: [CustomerListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {

  @Input() public set customerList(value : Customer[] | null) {
    // console.log(value);
    if (value) {
      this._customerList = value;
    }
  }
  public get customerList() : Customer[] | null {
    return this._customerList;
  }
  
  @Output() public delete: EventEmitter<number>;

  private _customerList!: Customer[];

  constructor(
    private customerListPresenter: CustomerListPresenterService,
    private router: Router
  ) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.customerListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })
  }

  onDelete(id: number) {
    this.customerListPresenter.onDelete(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`customers/edit/${id}`);
  }

}
