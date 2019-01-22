import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user-class/user'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:User;

  constructor(private http:HttpClient) {
     this.user=new User("",number,number,number,"");
  }
  userRequest(){

  interface ApiResponse{
      login:string;
      repos:number;
      followers:number;
      following:number;
      avatar_url:string

  }

}
}
