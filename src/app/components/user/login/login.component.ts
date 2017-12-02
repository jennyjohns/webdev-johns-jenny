import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";
import {environment} from "../../../../environments/environment";

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
  baseURL = environment.baseUrl;

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {  this.errorFlag = false; }
  login(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.userService.login(this.username, this.password)
      .subscribe((user) => {
        this.sharedService.user = user;
        this.router.navigate(['/profile']);
      });
    // this.userService.findUserByCredentials(this.username, this.password)
    //   .subscribe((user: any) => {
    //       if (user) {
    //         this.router.navigate(['user/', user._id]);
    //       } else {
    //         this.errorFlag = true;
    //       }
    //     }
    //   );
  }
  facebook() {

  }

}
