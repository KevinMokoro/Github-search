import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {HttpClient} from '@angular/common/http'
//import {User} from '../user-class/user'
import {UserRequestService} from '../user-http/user-request.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserRequestService]
})
export class UserComponent implements OnInit {

 user:User;

  constructor(private http:HttpClient,private userService:UserRequestService) {

    }


    ngOnInit() {

      this.userService.userRequest("KevinMokoro");
      this.user=this.userService.user;

  }

  }
