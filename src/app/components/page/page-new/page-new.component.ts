import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') newPageForm: NgModel;
  name: string;
  title: string;
  constructor() { }

  ngOnInit() {
  }
  newPage() {
    this.name = this.newPageForm.value.name;
    this.title = this.newPageForm.value.title;
  }
}
