import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    CommonModule,
    ChartsModule,
  
  ],
  exports: [AdminComponent]
})
export class DashboardModule { }
