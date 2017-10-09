import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buttonClicked(event: any) {
    console.log(event);
  }
}
