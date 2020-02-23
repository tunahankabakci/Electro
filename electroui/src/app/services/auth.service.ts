import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterUser } from "../models/register-user";
import { LoginUser } from '../models/login-user';
import { Router } from '@angular/router';
declare let alertify


@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  path = environment.path;

  login(user: LoginUser) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    console.log(user)
    this.http.post(this.path + `/users/login`, user, { headers: headers }).subscribe((data) => {
      if (data['token'] && data['user']) {
        localStorage.setItem('currentUser', JSON.stringify(data['user']));
        alertify.success('Succesfully login. Redirecting to homepage!');
        setTimeout(() => {
          this.router.navigateByUrl("") //homepage
        }, 2500)
      }
    }, (error) => {
      alertify.error('Email or password is incorrect');
    })
  }

  register(user: RegisterUser) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    this.http.post(this.path + `/users/register`, user, { headers: headers }).subscribe()
    alertify.success('Succesfully register. Redirecting to login page!');
    setTimeout(() => {
      window.location.reload();
    }, 2500)
  }


}
