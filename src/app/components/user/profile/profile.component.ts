import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user = {};
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.password = this.user['password'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
  }
  buttonClicked(event: any) {
    console.log(event);
  }
}
