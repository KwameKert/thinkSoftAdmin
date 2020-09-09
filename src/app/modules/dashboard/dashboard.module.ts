import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule} from '../shared/shared.module';
import { FleetManagerComponent } from './components/fleet-manager/fleet-manager.component';


@NgModule({
  declarations: [AdminComponent, FleetManagerComponent],
  imports: [
    SharedModule,
    CommonModule,
    ChartsModule,
  
  ],
  exports: [AdminComponent, FleetManagerComponent]
})
export class DashboardModule { }
