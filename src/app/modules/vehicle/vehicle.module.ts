import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import {SharedModule} from './../shared/shared.module';


@NgModule({
  declarations: [ListVehiclesComponent, AddVehicleComponent, EditVehicleComponent, ViewVehicleComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListVehiclesComponent, AddVehicleComponent, EditVehicleComponent, ViewVehicleComponent],
})
export class VehicleModule { }
