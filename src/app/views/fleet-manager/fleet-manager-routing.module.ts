import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FleetManagerComponent} from '../../modules/dashboard';
import { ListVehiclesComponent} from '../../modules/vehicle/index';

const routes: Routes = [ 

  {path: 'dashboard', component: FleetManagerComponent},

  {path: 'vehicle', component: ListVehiclesComponent},
  {path: '**', component: FleetManagerComponent},
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetManagerRoutingModule { }
