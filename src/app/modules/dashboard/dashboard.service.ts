import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/ApiResponse';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _baseUrl :String = environment.api_host;
   private response: any;

  //  private loggedInStatus = localStorage.getItem("status");
  //  private authority = localStorage.getItem("role");

    constructor(
        private _httpClient: HttpClient
    ) {
       
    }
  
    fetchComponents(): Observable<ApiResponse<any>>{
     return this._httpClient.get<ApiResponse<any>>(`${this._baseUrl}/user/admin/dashboard`)
    }
}
