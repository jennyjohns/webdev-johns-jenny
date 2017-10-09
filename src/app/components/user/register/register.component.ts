import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: 'Invalid username or password!';
  constructor() { }

  ngOnInit() {
  }
  register() {
    this.username = this.registrationForm.value.username;
    this.password = this.registrationForm.value.password;
    this.errorFlag = true;
  }
  buttonClicked(event: any) {
    console.log(event);
  }
}
