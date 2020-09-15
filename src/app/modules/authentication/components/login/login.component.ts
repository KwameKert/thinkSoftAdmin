import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup ;
  link: string ;

constructor(private _router: Router, private _fb: FormBuilder,private _authService: AuthService, private _toastr: ToastrService) { }

ngOnInit() {
 
  this.loginForm = this._fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  });

}

loginUser(){
  this.isLoading  = true;

  this._authService.login(this.loginForm.value).pipe(first())
  .subscribe(
      data => {
        let user = data.user;
        switch(user.role){
            case "ADMIN":
              this._toastr.success("Login successful", "Success  😊", {  timeOut:2000});
              return this._router.navigate(['/admin']);
              break;

              case "FLEET MANAGER":
                this._toastr.success("Login as FLEET MANAGER", "Success  😊", {  timeOut:2000});
                return this._router.navigate(['/fleet_manager']);
                break;  
             
              
            default:
              this._toastr.success("Login successful", "Success  😊", {  timeOut:2000});
              return this._router.navigate(['./admin/dashboard'])  
           
      }
      
    },
      error => {
        console.error(error)
      }).add(()=>{
        this.isLoading  = false;
      });


}

  redirect(){
    this._router.navigate(['/admin'])
  }
}
