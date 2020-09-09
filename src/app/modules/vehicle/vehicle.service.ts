import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/ApiResponse';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }



  public addVehicle(data): Observable<ApiResponse<any>>{
    return this._httpClient.post<ApiResponse<any>>(`${this._baseUrl}/vehicle/add`, data);
  }

  public listVehicles(): Observable<ApiResponse<any>>{
    return this._httpClient.get<ApiResponse<any>>(`${this._baseUrl}/vehicle/me/live`);
  }


}
