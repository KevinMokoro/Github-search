import { Component, OnInit } from '@angular/core';
import {user} from "../user"
import {HttpClient} from '@angular/common/http'
import {User} from '../user-class/user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 users=[]

  constructor(private http:HttpClient) {

    }


  ngOnInit() {
    interface ApiResponse{
        login:string;
        repos:string;
        followers:number;
        following:number;
        avatar_url:string
    }
     this.http.get<ApiResponse>("https://api.github.com/users/KevinMokoro?access_token=ca726da5807d7a2a7e5babf61aebfd7a2611082f").subscribe(data=>{
    this.user=new User(data.login,data.repos,data.followers,data.following,data.avatar_url)
      })
  }

}
