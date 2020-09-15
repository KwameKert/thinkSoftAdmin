import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/service';
import { Vehicle } from '../vehicle/vehicle.service';

export interface Rider{
  _id ?:  string, 
  firstName: string, 
  lastName: string,
  gender : string, 
  dob: Date,
  status?: string,
  description?: string,
  email: string,
  address: string,
  phone: string,
  company ?: string,
  vehicle ?: Vehicle
}

@Injectable({
  providedIn: 'root'
})
export class RiderService  extends CrudService<Rider>{


  private _url :String = environment.api_host;
  constructor(public _httpClient: HttpClient) { 
    super(_httpClient, "rider")
  }


  // public addRider(data): Observable<ApiResponse<any>>{
  //   return this._httpClient.post<ApiResponse<any>>(`${this._baseUrl}/auth/driver/;register`, data);
  // }

  // public listRiders(): Observable<ApiResponse<any>>{
  //   return this._httpClient.get<ApiResponse<any>>(`${this._baseUrl}/riders/me`);
  // }

  // public getVehicle(id: string): Observable<ApiResponse<any>>{
  //   return this._httpClient.get<ApiResponse<any>>(`${this._baseUrl}/vehicle/${id}`);
  // }

  // public deleteVehicle(id: string): Observable<ApiResponse<any>>{
  //   return this._httpClient.delete<ApiResponse<any>>(`${this._baseUrl}/vehicle/${id}`);
  // }


  // public updateVehicle(id: string, data: any): Observable<ApiResponse<any>>{
  //   return this._httpClient.patch<ApiResponse<any>>(`${this._baseUrl}/vehicle/${id}`, data);
  // }


}
