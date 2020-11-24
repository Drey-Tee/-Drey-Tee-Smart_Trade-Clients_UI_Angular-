import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userEmail:string=""
  userPassword:string=""
  userFirstName:string=""
  userLastName:string=""
  userOtherName:string=""


  checkLogin(){
  console.log(`email is ${this.userEmail} and password is ${this.userPassword}`);
  
 }
}
