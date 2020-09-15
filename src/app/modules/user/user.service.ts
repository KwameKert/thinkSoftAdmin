import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CrudService } from '../shared/service';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';

export interface User{
  _id: string,
  username : string,
  email: string, 
  role: string,
  status ?: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends  CrudService<User>{


   public url :String = environment.api_host;

  constructor(public _httpClient: HttpClient) {
    super(_httpClient, 'user')
   }

   fetchAllUsers(){
     return  this._httpClient.get<
       ApiResponse<User[]>>(`${this.url}/user/admin/list`).toPromise()
   }

   addUser(user: User){
     return  this._httpClient.post<
       ApiResponse<User>>(`${this.url}/auth/admin/add"`, user).toPromise()
   }



}