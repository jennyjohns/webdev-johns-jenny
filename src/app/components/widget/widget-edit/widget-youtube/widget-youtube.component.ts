import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') newWidgetForm: NgModel;
  widget = {};
  wgid: string;
  url: string;
  userId: string;
  webId: string;
  pageId: string;
  widgets = [];
  widgetType: string;
  width: string;

  constructor(private sanitizer: DomSanitizer, private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router) {
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
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }

  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }
  commit(width, url) {
    this.widget = {
      _id: this.widget['_id'],
      widgetType: 'YOUTUBE',
      pageId: this.widget['pageId'],
      width: width,
      url: url
    };
    this.widgetService.updateWidget(this.widget['_id'], this.widget);

    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
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
