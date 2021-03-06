import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EditVehicleComponent } from 'src/app/modules/vehicle/components/edit-vehicle/edit-vehicle.component';
import { VehicleService } from 'src/app/modules/vehicle/vehicle.service';
import { Rider, RiderService } from '../../rider.service';

@Component({
  selector: 'app-edit-rider',
  templateUrl: './edit-rider.component.html',
  styleUrls: ['./edit-rider.component.css']
})
export class EditRiderComponent implements OnInit {

  selectedVehicle: string;
  rider: any ;
  vehicles: any;
  riderForm: FormGroup;
  constructor(private _fb: FormBuilder,  private ngxService: NgxUiLoaderService, private _riderService: RiderService,  public dialogRef: MatDialogRef<EditVehicleComponent>, private _vehicleService: VehicleService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.loadRiderForm();
    this.loadActiveVehicles()
    this.patchRiderForm(this.data);

    this.selectedVehicle = this.data.vehicle._id;
    console.log(this.selectedVehicle)
    console.log(this.formatDate(this.data.dob))
    
  //  console.log("5f588a28fd7cae8a383d9344" == this.data.vehicle._id);
  }

  loadRiderForm(){
    this.riderForm = this._fb.group({
      _id: '',
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: '',
      vehicle: ''
    })
  }

  patchRiderForm(data: Rider){
    let d = new Date(data.dob)
    let date = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
 
    this.riderForm = this._fb.group({
      _id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      dob: this.formatDate(data.dob),
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      status: data.status,
      description: data.description,
      vehicle: data.vehicle._id
    })

  }

 async saveRider(data: any){

    try{
      this.ngxService.start()

      let resObject = await this._riderService.updateItem(data);
      this.dialogRef.close({event:true});

    }catch(error){
      console.error(error);
    }finally{
      this.ngxService.stop();
    }

  }

  async loadActiveVehicles(){
    try{
      this.ngxService.start()

      let resObject = await this._vehicleService.query({status: "active"});
      this.vehicles = resObject.data;
     
    }catch(error){
      console.error(error);
    }finally{
      this.ngxService.stop();
    }
  }


   formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

}
