import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AdminRoutingModule} from './admin-routing.module';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    DashboardModule,
    SharedModule
  ]
})
export class AdminModule { }
