import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FleetManagerComponent} from '../../modules/dashboard';
import { ListUserComponent} from '../../modules/user/index';

const routes: Routes = [ 

  {path: 'dashboard', component: FleetManagerComponent},
  {path: '**', component: FleetManagerComponent},
  {path: 'user/list', component: ListUserComponent}
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetManagerRoutingModule { }
