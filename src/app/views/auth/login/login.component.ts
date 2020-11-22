import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
 userEmail:string=""
 userPassword:string=""
checkLogin(){
  console.log(`username is ${this.userEmail} and password is ${this.userPassword}`);

}


}
