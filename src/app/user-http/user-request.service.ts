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
    this.user = new User("", 0, 0, 0, "","");
  }
  userRequest() {

    interface ApiResponse {
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      repos_url: string

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.user.login = response.login
        this.user.repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.avatar_url = response.avatar_url
        this.user.repos_url = response.repos_url
        resolve()

      },
        error => {
          this.user.login = "KevinMokoro"
          this.user.repos = 15
          this.user.followers = 0
          this.user.following = 0
          this.user.avatar_url = "photo"
          this.user.repos_url="repos"
          reject(error)


        }
      )
    })
    return promise

  }
}
