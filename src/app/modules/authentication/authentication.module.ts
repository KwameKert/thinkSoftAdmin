import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    MatFormFieldModule
  ],
})
export class AuthenticationModule { }
