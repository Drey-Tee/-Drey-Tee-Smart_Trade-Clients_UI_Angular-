import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Config } from 'src/app/config';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private httpClient:HttpClient,private router: Router) {}

  ngOnInit(): void {
    console.log("id", sessionStorage.getItem("id"))
    if (Config.userAuthenticated()){
      this.router.navigateByUrl("/dashboard")
    }
  }


 userEmail:string=""
 userPassword:string=""
 onErrorMessage:string=""
 hasError:boolean=false


  checkLogin(){
  console.log(`email is ${this.userEmail} and password is ${this.userPassword}`);
  this.httpClient.post(Config.apiMainUrl()+"", 
  {email:this.userEmail,password:this.userPassword}).subscribe(response=>{
    console.log("response",response)
    console.log(response['first_name'])
    console.log(response['email'])
    console.log(response['id'])

    Config.saveUser(response)

    this.hasError=false
    this.router.navigateByUrl("/dashboard")


  },error =>{
    console.log("error",error);
    console.log(error['error']["message"]);

    this.onErrorMessage = error['error']["message"]
    this.hasError=true
  })
}


}
