import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRidersComponent } from './components/list-riders/list-riders.component';
import { AddRiderComponent } from './components/add-rider/add-rider.component';
import { EditRiderComponent } from './components/edit-rider/edit-rider.component';
import { ViewRiderComponent } from './components/view-rider/view-rider.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListRidersComponent, AddRiderComponent, EditRiderComponent, ViewRiderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListRidersComponent]
})
export class RiderModule { }
