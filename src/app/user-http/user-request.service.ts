import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { User } from '../user-class/user'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User("", number, number, number, "");
  }
  userRequest() {

    interface ApiResponse {
      login: string;
      repos: number;
      followers: number;
      following: number;
      avatar_url: string

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.user.login = response.login
        this.user.repos = response.repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.avatar_url = response.avatar_url

        resolve()

      },
        error => {
          this.user.login = "KevinMokoro"
          this.user.repos = 15
          this.user.followers = 0
          this.user.following = 0
          this.user.avatar_url = pic
          reject(error)


        }
      )
    })
    return promise
  }
}
