import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from '../../../shared/service/crud.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() userId : number;
  userForm: FormGroup ;
  role: any = '';

  @Output() updatedUser: EventEmitter<boolean> = new EventEmitter();

  constructor(private _fb: FormBuilder, private _toastr: ToastrService,  private ngxService: NgxUiLoaderService,private _userService: UserService) { }

  ngOnInit(): void {
    

  }

  loadForm(){
    this.userForm = this._fb.group({
      id: this.userId,
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: '',
      status: ''
    })

  }


  async addUser(){

    try{
      this.ngxService.start()
      let resObj = await this._userService.addItem(this.userForm.value);
      if(resObj){
        this.updatedUser.emit(true)
      }else{
        console.error("oops an error here")
      }
    }catch(error){

    }finally{
      this.ngxService.stop()
    }

  }




 async findUser(id){

    if(id){
      let resObj = await this._userService.fetchItem(id);
      let result = resObj.data
      if(resObj){
        this.userForm.patchValue({
          username: result.username,
          email: result.email,
          role: result.role,
          status: result.status,
          id: result._id,
        })
      }
    
    }else{
      console.log("no _id found")
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  
    this.userId = changes.userId.currentValue;
     this.loadForm();
    this.findUser(this.userId);
  }
  

}
