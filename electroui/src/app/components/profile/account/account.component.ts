import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
declare let alertify;

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user: any = { fullname: "", username: "", email: "", password: "" };
  updateUser:any={fullname:""}

  ngOnInit() {
    this.authService.profile().subscribe(
      (data) => {
        this.user["fullname"]=data["fullname"]
        this.user["username"]=data["username"]
        this.user["email"]=data["email"]
      },
      (error) => {
        alertify.error("Email or password is incorrect");
      }
    );
  }

  update(){
    this.updateUser["fullname"]=this.user["fullname"]
    this.authService.update(this.updateUser)
  }

  removeActive(id: string) {
    var elem = document.getElementById(id);
    elem.classList.remove("active");
  }

  showValidate(id: string, alert: string) {
    var elem = document.getElementById(id);
    elem.setAttribute("data-validate", alert);
    elem.classList.add("alert-validate");
  }

  hideValidate(id: string) {
    var elem = document.getElementById(id);
    elem.classList.remove("alert-validate");
  }
}
