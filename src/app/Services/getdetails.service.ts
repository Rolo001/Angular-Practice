import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tokenko } from '../Classes/Token';

@Injectable({
  providedIn: 'root'
})
export class GetdetailsService {

  constructor(private http:HttpClient) { }
  private apiUrl: string = "https://ys-training-api.herokuapp.com/api/students";

  getStudentDetails(userID: number){
    let headers_obj = {
      Authorization: "Bearer ")
    }
  }
}
