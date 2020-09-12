import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../../../shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteItemComponent } from '../../../shared/components/delete-item/delete-item.component';
import { ViewVehicleComponent } from '../view-vehicle/view-vehicle.component';
import { VehicleService } from '../../vehicle.service';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from '../edit-vehicle/edit-vehicle.component';


@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  displayedColumns: Array<string> = ['pic','model', 'brand', 'status','mileage', 'created_on', 'actions'];
  isLoading: boolean = true;
  dataSource: any = null;
  
  constructor(private _crudService: CrudService, private _vehicleService: VehicleService,  public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router, private _toastr: ToastrService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit(): void {
    this.loadVehicles();
  }


  loadVehicles(){
    this._vehicleService.listVehicles().subscribe((data)=>{
      if(data.data == null){
        this._toastr.info("No vehicles found. 🥺","",{
          timeOut:2000
        })
      }else{
        this.dataSource = data.data;
        this.dataSource.paginator = this.paginator;
      }
      
      this.isLoading = false;
    }, error=>{

    })
  }



  deleteVehicle(id: Number){
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
        this._snackBar.open("User Deleted 🙂  ", "", {
          duration: 2000,
        });
      // this.loadAllUsers()

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }

  editVehicle(vehicle){
    const dialogRef = this.dialog.open(EditVehicleComponent, {
      width: '820px',
      height: '520px',
      data: vehicle
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this._toastr.success("Vehicle added successfully", "Success  😊", {  timeOut:2000});
       this.loadVehicles()
      }
    }, error=>{
      this._toastr.error("Oops an error. 🥺","",{
        timeOut:2000
      })
    });
  }

 
  addVehicle(){

    const dialogRef = this.dialog.open(AddVehicleComponent, {
      width: '820px',
      height: '520px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this._toastr.success("Vehicle added successfully", "Success  😊", {  timeOut:2000});
       this.loadVehicles()
      }
    }, error=>{
      this._toastr.error("Oops an error. 🥺","",{
        timeOut:2000
      })
    });

  }

  viewVehicle(vehicle){
    const dialogRef = this.dialog.open(ViewVehicleComponent, {
      width: '800px',
      height: '420px',
      data: vehicle
    });

    dialogRef.afterClosed().subscribe(result => {
    }, error=>{
      this._toastr.error("Oops an error. 🥺","",{
        timeOut:2000
      })
    });

  }

}
