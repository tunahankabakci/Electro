import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }


  ngOnInit() {
    if(!localStorage.getItem('currentUser')){
      this.router.navigateByUrl("login")
    }
  }

  logout(){
    this.authService.logout()
  }
}
