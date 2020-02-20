import { Component, OnInit } from "@angular/core";

declare var jQuery: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (function($) {
    })(jQuery);
  }


  removeActive(id:string){
    var elem =document.getElementById(id)
    elem.classList.remove("active")
  }
}
