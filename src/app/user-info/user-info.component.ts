import { Component, OnInit, Input } from '@angular/core';
import {user} from '../user'
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user:user;
  constructor() { }

  ngOnInit() {
  }

}
