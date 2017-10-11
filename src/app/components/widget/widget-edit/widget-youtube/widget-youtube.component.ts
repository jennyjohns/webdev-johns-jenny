import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  wgid: string;
  url: SafeResourceUrl;
  widget: any;

  constructor(private sanitizer: DomSanitizer, private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.wgid);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.widget['url']);
  }
  buttonClicked(event: any) {
    console.log(event);
  }
}
