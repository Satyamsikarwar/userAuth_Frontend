import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
constructor(private loginService:LoginService){}
username:string=''
email:string=''
name:string=''
getUser(){
  this.loginService.getCurrentUser().subscribe((response:any)=>{
    console.log(response);
    this.username=response['username']
    this.email=response.email;
    this.name=response.full_name
  },
  (error)=>{
    console.log("Error:",error);
  })
}
}
