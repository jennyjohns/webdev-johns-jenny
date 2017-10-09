import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  name: string;
  description: string;
  constructor() { }

  ngOnInit() {
  }
  newWebsite() {
    this.name = this.websiteForm.value.name;
    this.description = this.websiteForm.value.description;
  }
}
