import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from '../../../shared/service/crud.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup ;
  role: any = '';
  @Output() newUser: EventEmitter<boolean> = new EventEmitter();

  constructor(private _fb: FormBuilder, private _userService: UserService, private _toastr: ToastrService,  private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    
    this.userForm = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('123456', Validators.required),
      role: '',
      status: ''
    })
  }


  async addUser(){

    try{
      this.ngxService.start()
      let resObject =  await this._userService.addUser(this.userForm.value);
  
      if(resObject){
        this.userForm.reset();
        this.newUser.emit(true)
      }
      
    }catch(error){
      console.error(error)
    }finally{
      this.ngxService.stop()
    }
  
    
// this.ngxService.start()
//     this._crudService.addItem(this.userForm.value, "auth/admin/add").subscribe(data=>{
//      this.userForm.reset();
//       this._toastr.success(data.message, "Success  😊", {  timeOut:2000});

//       this.newUser.emit(true)
//     }, error=>{

//       this._toastr.error("Please authenticate", "Oops 🥺", {  timeOut:4000});
//       console.error(error)
//     })

//     this.ngxService.stop()



  }

}
