import { Component, OnInit } from '@angular/core';
import {user} from "../user"
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 users=[]

  constructor() { }

  ngOnInit() {
  }

}
