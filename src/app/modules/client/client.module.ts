import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';



@NgModule({
  declarations: [ ListOrdersComponent],
  imports: [
    CommonModule
  ],
  exports: [ListOrdersComponent]
})
export class ClientModule { }
