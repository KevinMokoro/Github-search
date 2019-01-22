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

  ngOnInit() {  this.http.get('https://api.github.com/users/daneden?access_token=' + bbb2198f517dc0c470c5c46773d9e9c516d19fde).subscribe(data=>{
      })
  }

}
