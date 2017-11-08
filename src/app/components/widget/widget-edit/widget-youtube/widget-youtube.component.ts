import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from '@angular/forms';
import {isUndefined} from "util";

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
  dateCreated: Date;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
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
    this.widgetService.findWidgetById(this.wgid)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.url = this.widget['url'];
        this.widgetType = this.widget['widgetType'];
        this.width = this.widget['width'];
        if (isUndefined(widget['dateCreated'])) {
          this.dateCreated = new Date();
        } else {
          this.dateCreated = widget['dateCreated'];
        }
      });
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((page: any) => {
        this.widgets = page.widgets;
      });
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
      url: url,
      dateCreated: this.dateCreated
    };
    this.widgetService.updateWidget(this.widget['_id'], this.widget)
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
      });
  }
  deleted(wgid) {
    this.widgetService.deleteWidget(wgid)
      .subscribe((widgets: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
      });
  }
}
