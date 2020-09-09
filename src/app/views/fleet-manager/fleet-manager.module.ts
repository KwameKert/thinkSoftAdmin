import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetManagerRoutingModule } from './fleet-manager-routing.module';
import {VehicleModule} from '../../modules/vehicle/vehicle.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehicleModule,
    FleetManagerRoutingModule
  ]
})
export class FleetManagerModule { }
