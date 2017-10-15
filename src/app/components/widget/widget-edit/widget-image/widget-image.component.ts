import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from "../../../../services/widget.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('f') newWidgetForm: NgModel;
  widget = {};
  wgid: string;
  userId: string;
  webId: string;
  pageId: string;
  widgets = [];
  url: string;
  width: string;
  widgetType: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router, private sanitizer: DomSanitizer) {
  }

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
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    this.widget = this.widgetService.findWidgetById(this.wgid);
    this.url = this.widget['url'];
    this.width = this.widget['width'];
    this.widgetType = this.widget['widgetType'];

  }
  commit(width, url) {
    this.widget = {
      _id: this.widget['_id'],
      widgetType: 'IMAGE',
      pageId: this.widget['pageId'],
      width: width,
      url: url
    };
    this.widgetService.updateWidget(this.widget['_id'], this.widget);

    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }
  goToWidgets() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }

  chooseWidget() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }

  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  editWidget(wgid) {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', wgid]);
    this.widget = this.widgetService.findWidgetById(wgid);
    this.widgetType = this.widget['widgetType'];
    this.url = this.widget['url'];
    this.width = this.widget['width'];
  }
  cleanURL(url: string) {
    let youTubeURL = 'https://www.youtube.com/embed/';
    const end = url.split('/');
    youTubeURL += end[end.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(youTubeURL);
  }
  deleted(wgid) {
    this.widgetService.deleteWidget(wgid);
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }
}
