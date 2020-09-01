import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  completeOrders: number;
  pendingOrders: number;
  dataSource: any;
  displayedColumns: any =['id', 'username', 'phone','email', 'createdAt'];


  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchComponents();
  }

  fetchComponents(){
      this._dashboardService.fetchComponents().subscribe(data=>{
          let result = data.data;
          this.completeOrders = result.completeOrders;
          this.pendingOrders = result.pendingOrders;
          this.dataSource = new MatTableDataSource<Position>(result.users);
          //this.completeOrders = data.complete
      }, error=>{
        console.error(error)
      })

  }

}
