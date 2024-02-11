import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router:Router) {}

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    const user = {
      "username": this.username,
      "password": this.password
    };

    this.loginService.login(user).subscribe(
      (response: any) => {
        console.log("token:",response.access_token)
        localStorage.setItem("access_token",response.access_token);
        this.router.navigate(['/users'])
      },
      (error) => {
        console.error("Error:", error);
      }
    );

    this.username = '';
    this.password = '';
  }
}
