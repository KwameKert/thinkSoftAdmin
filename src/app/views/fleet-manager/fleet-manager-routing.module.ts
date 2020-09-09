import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from '../../modules/dashboard';
import { ListUserComponent} from '../../modules/user/index';

const routes: Routes = [ 

  {path: 'dashboard', component: AdminComponent},
  {path: '**', component: AdminComponent},
  {path: 'user/list', component: ListUserComponent}
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetManagerRoutingModule { }
