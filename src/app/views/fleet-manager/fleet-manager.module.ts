import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetManagerRoutingModule } from './fleet-manager-routing.module';
import {VehicleModule} from '../../modules/vehicle/vehicle.module'
import { RiderModule } from 'src/app/modules/rider/rider.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehicleModule,
    RiderModule,
    FleetManagerRoutingModule
  ]
})
export class FleetManagerModule { }
