import { Component, OnInit } from '@angular/core';
import {user} from "../user"
import {HttpClient} from '@angular/common/http'
import {User} from '../user-class/user'

import {UserRequestService} from '../user-http/user-request.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserRequestService]
})
export class UserComponent implements OnInit {

 user:User;

  constructor(private http:HttpClient) {

    }


  ngOnInit() {
    interface ApiResponse{
        login:string;
        public_repos:number;
        followers:number;
        following:number;
        avatar_url:string;
        repos_url:string;

    }
     this.http.get<ApiResponse>("https://api.github.com/users/KevinMokoro?access_token=ca726da5807d7a2a7e5babf61aebfd7a2611082f").subscribe(data=>{
    this.user=new User(data.login,data.public_repos,data.followers,data.following,data.avatar_url,data.repos_url)
  },err=>{
    this.user=new User('Kevin',15,0,0,'photo',"repos")
    console.log("Error occured ")
  })
  //this.userService.userRequest()
  //this.user=this.userService.user
  }

}
