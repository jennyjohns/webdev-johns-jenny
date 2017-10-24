import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  errorFlag: boolean;
  errorMsg: string;
  user: any;
  user_id: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.email = this.registrationForm.value.email;
    this.firstName = this.registrationForm.value.firstName;
    this.lastName = this.registrationForm.value.lastName;
    this.errorMsg = 'Invalid username or password!';
    this.errorFlag = true;
  }
  registered(username, password, firstName, lastName, email) {
    this.userService.findUserByUsername(username)
      .subscribe((user: any) => {
        if (user !== null) {
          console.log(user);
          this.errorFlag = true;
          this.errorMsg = 'Username already in use, please choose another username!';
        }else {
          this.user = {username, password, firstName, lastName, email};
          this.userService.createUser(this.user);
          this.user_id = this.user['_id'];
          this.router.navigate(['user/', this.user_id]);
        }
      });
  }

}
