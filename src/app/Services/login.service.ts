import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tokenko } from '../Classes/Token';

const HttpOptions = <any> {
  header: new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private logInUrl: string = "https://ys-training-api.herokuapp.com/api/authenticate";

  login(userName: string, password: string): Observable<any> {
    var enc = window.btoa(userName + ":" + password);
    let headers_obj = {
      Authorization: "Basic " + btoa(userName + ":" + password)
    }
    console.log("Hello Token: " + localStorage.getItem("token"));
    return this.http.post<Tokenko>(this.logInUrl, null, {headers : headers_obj});
  }
}
