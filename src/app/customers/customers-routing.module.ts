import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'list',
        component: CustomerListContainerComponent
      },
      {
        path: 'add',
        component: CustomerFormContainerComponent
      },
      {
        path: 'edit/:id',
        component: CustomerFormContainerComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
