import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class UserService {
  constructor(private http: Http) {}
  baseURL = environment.baseUrl;
  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: any) {
    const url = this.baseURL + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: string) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: string) {
    const url = this.baseURL + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username: string, password: string) {
    const url = this.baseURL + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId: string, user: any) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId: string) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
