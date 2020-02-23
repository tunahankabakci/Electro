import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from 'src/app/models/register-user';
import { LoginUser } from 'src/app/models/login-user';
import validator from 'validator';

declare var jQuery: any;
declare let alertify

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }
  registerUser: RegisterUser = { fullname: "", username: "", email: "", password: "" }
  loginUser: any = { email: "", password: "" }
  ngOnInit() {
    (function ($) {
    })(jQuery);
  }



  login(loginUser: LoginUser) {
    if(this.checkLoginValidate(loginUser)){
      this.authService.login(loginUser)
    }
  }

  register(registerUser: RegisterUser) {
    if (this.checkRegisterValidate(registerUser)) {
      this.authService.register(registerUser)
      
    }
  }


  //login register sayfa geçişleri için
  removeActive(id: string) {
    var elem = document.getElementById(id)
    elem.classList.remove("active")
  }

  showValidate(id: string, alert: string) {
    var elem = document.getElementById(id)
    elem.setAttribute('data-validate', alert)
    elem.classList.add("alert-validate")
  }

  hideValidate(id: string) {
    var elem = document.getElementById(id)
    elem.classList.remove("alert-validate")
  }




  checkLoginValidate(loginUser: LoginUser): boolean {
    var flag = true

    if (loginUser.email === "") {
      this.showValidate("l1", "Email is required")
      flag = false
    } else if (!validator.isEmail(loginUser.email)) {
      this.showValidate("l1", "Invalid Email")
      flag=false
    }

    if (loginUser.password === "") {
      this.showValidate('l2', "Password is required")
      flag = false
    } else if (loginUser.password.length > 40) {
      this.showValidate('l2', "Password must be less than 40 characters")
      flag = false
    } else if (loginUser.password.length < 6) {
      this.showValidate('l2', "Password must be more than 6 characters")
      flag = false
    }

    return flag
  }


  checkRegisterValidate(registerUser: RegisterUser): boolean {
    var flag: boolean = true

    if (registerUser.fullname === "") {
      this.showValidate('r1', "fullname is required")
      flag = false
    } else if (!registerUser.fullname.match(/^([A-Za-z]+?)\s([A-Za-z]+?)$/)) {
      this.showValidate('r1', "Fullname cannot contain special characters or numbers and Surname required")
      flag = false
    } else if (registerUser.fullname.length > 30) {
      this.showValidate('r1', "Fullname must be less than 30 characters")
      flag = false
    } else if (registerUser.fullname.length < 5) {
      this.showValidate('r1', "Fullname must be more than 5 characters")
      flag = false
    }


    if (registerUser.username === "") {
      this.showValidate('r2', "Username is required")
      flag = false
    } else if (!validator.isAlphanumeric(registerUser.username)) {
      this.showValidate('r2', "Username cannot contain special characters")
      flag = false
    } else if (registerUser.username.length > 15) {
      this.showValidate('r2', "Username must be less than 15 characters")
      flag = false
    } else if (registerUser.username.length < 3) {
      this.showValidate('r2', "Username must be more than 3 characters")
      flag = false
    }


    if (registerUser.email === "") {
      this.showValidate('r3', "Email is required")
      flag = false
    } else if (!validator.isEmail(registerUser.email)) {
      this.showValidate('r3', "Invalid Email")
      flag = false
    } else if (registerUser.email.length > 100) {
      this.showValidate('r3', "Email must be less than 100 characters") //legal max value 254
      flag = false
    } else if (registerUser.email.length < 6) {
      this.showValidate('r3', "Email must be more than 6 characters")
      flag = false
    }


    if (registerUser.password === "") {
      this.showValidate('r4', "Password is required")
      flag = false
    } else if (registerUser.password.length > 40) {
      this.showValidate('r4', "Password must be less than 40 characters")
      flag = false
    } else if (registerUser.password.length < 6) {
      this.showValidate('r4', "Password must be more than 6 characters")
      flag = false
    }

    return flag
  }

}
