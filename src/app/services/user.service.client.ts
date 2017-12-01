import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from "@angular/router";
import {SharedService} from "./shared.service.client";


@Injectable()

export class UserService {
  constructor(private sharedService: SharedService, private router: Router, private http: Http) {
  }

  options: RequestOptions = new RequestOptions();
  baseURL = environment.baseUrl;
  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser,
    'login': this.login,
    'register': this.register,
    'logout': this.logout,
    'loggedIn': this.loggedIn
  };

  loggedIn() {
    const url = this.baseURL + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  logout() {
    const url = this.baseURL + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((status) => {
        return status;
      });
  }

  register(username, password, firstname, lastname, email) {
    const url = this.baseURL + '/api/register';
    const credentials = {
      username: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
      email: email
    };
    // this.options.withCredentials = true;
    return this.http.post(url, credentials) // , this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const url = this.baseURL + '/api/login';
    const credentials = {
      username: username,
      password: password,
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });

  }

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
