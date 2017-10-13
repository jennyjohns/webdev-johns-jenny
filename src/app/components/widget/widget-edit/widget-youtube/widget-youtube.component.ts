import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  wgid: string;
  url: SafeResourceUrl;
  widget: any;
  userId: string;
  webId: string;
  pageId: string;
  widgets = [];
  widgetType: string;
  width: string;

  constructor(private sanitizer: DomSanitizer, private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.userId = params['uid'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.wgid);
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    this.url = this.widget['url'];
    this.widgetType = this.widget['widgetType'];
    this.width = this.widget['width'];
  }
  goToWidgets() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }
  chooseWidget() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', 'new']);
  }
  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }
  editWidget(wgid) {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', wgid]);
  }
}
