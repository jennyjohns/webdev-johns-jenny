import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()

export class UserService {
  constructor(private http: Http) {}
  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@email.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@email.com'},
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia', email: 'charly@email.com'  },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jose@email.com' }

  ];
  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: any) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: string) {
    const url = 'http://localhost:3100/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username: string, password: string) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId: string, user: any) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users[x] = user;
    //   }
    // }
  }

  deleteUser(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x);
      }
    }
  }
}
