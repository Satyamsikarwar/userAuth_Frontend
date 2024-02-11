import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  name: string = '';
  password: string = '';
  constructor(private loginService:LoginService, private router:Router){}
  signup() {
    const user={"username":this.username,"email":this.email,"full_name":this.name,"hashed_password":this.password}
    console.log("User:",user);
    this.loginService.signup(user).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/login']);
    },
    (error)=>{
      console.log("error:",error)
    })
    // You can proceed with form submission or any other logic here

    // Clear form fields after submission
    this.username = '';
    this.email = '';
    this.name = '';
    this.password = '';
  }
  
  goToLoginPage(){
    this.router.navigate(['/login']);
  }
}


