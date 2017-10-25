import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {  }
  login(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.errorFlag = true;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user: any) => {
          if (user) {
            this.router.navigate(['user/', user._id]);
          }
        }
      );
  }

}
