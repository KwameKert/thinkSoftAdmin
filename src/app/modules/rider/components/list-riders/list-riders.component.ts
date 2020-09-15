import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeleteItemComponent } from 'src/app/modules/shared/components/delete-item/delete-item.component';
import { RiderService } from '../../rider.service';
import { AddRiderComponent } from '../add-rider/add-rider.component';
import { EditRiderComponent } from '../edit-rider/edit-rider.component';
import { ViewRiderComponent } from '../view-rider/view-rider.component';

@Component({
  selector: 'app-list-riders',
  templateUrl: './list-riders.component.html',
  styleUrls: ['./list-riders.component.css']
})
export class ListRidersComponent implements OnInit {

  displayedColumns: Array<string> = ['pic','full name', 'address', 'status', 'phone','created_on', 'actions'];
  isLoading: boolean = true;
  dataSource: any = null;
  isEmpty: boolean = false;
  
  constructor(private _riderService: RiderService,  public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router, private _toastr: ToastrService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit(): void {
    this.loadRiders();
  }


  async loadRiders(){
    try{
      this.isLoading = true;
      let riders = await this._riderService.query({status: "live"});
        this.dataSource = riders.data;
        this.dataSource.paginator = this.paginator;
      
    }catch(error){
      this.isEmpty = true;
    }finally{
      this.isLoading = false;
    }
  
  }



  deleteRider(id: Number){
    let data = {
      module: 'users',
      id
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        
        // this._snackBar.open("User Deleted 🙂  ", "", {
        //   duration: 2000,
        // });
      }else{

        // this._toastr.error("Oops an error. 🥺","",{
        //   timeOut:2000
        // })
      }
    });
  }

  editRider(Rider){
    const dialogRef = this.dialog.open(EditRiderComponent, {
      width: '820px',
      height: '520px',
      data: Rider
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
      //  this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
       this.loadRiders()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });
  }

 
  addRider(){

    const dialogRef = this.dialog.open(AddRiderComponent, {
      width: '820px',
      height: '520px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
       // this._toastr.success("Rider added successfully", "Success  😊", {  timeOut:2000});
       this.loadRiders()
      }
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });

  }

  viewRider(data: any){
    const dialogRef = this.dialog.open(ViewRiderComponent, {
      width: '800px',
      height: '420px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
      // this._toastr.error("Oops an error. 🥺","",{
      //   timeOut:2000
      // })
    });

  }


}
