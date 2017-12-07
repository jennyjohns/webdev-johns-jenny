import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from '@angular/forms';
import {environment} from '../../../../../environments/environment';
import {isUndefined} from "util";
import {SharedService} from "../../../../services/shared.service.client";

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
  baseURL = environment.baseUrl;
  dateCreated: Date;

  constructor(private sharedService: SharedService, private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wgid = params['wgid'];
          this.userId = this.sharedService.user['_id'];
          this.webId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
      });
    this.widgetService.findWidgetById(this.pageId, this.wgid)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.url = this.widget['url'];
        this.width = this.widget['width'];
        this.widgetType = this.widget['widgetType'];
        this.dateCreated = this.widget['dateCreated'];
      });
  }

  commit(width, url) {
    this.widget = {
      _id: this.widget['_id'],
      widgetType: 'IMAGE',
      pageId: this.widget['pageId'],
      width: width,
      url: url,
      dateCreated: this.dateCreated
    };
    this.widgetService.updateWidget(this.widget['_id'], this.widget)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.url = url;
        this.width = width;
        this.widgetType = 'IMAGE';
        this.dateCreated = widget['dateCreated'];
        this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
      });
  }

  goToWidgets() {
    this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
  }

  chooseWidget() {
    this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  deleted(wgid) {
    this.widgetService.deleteWidget(wgid)
      .subscribe((widgets: any) => {
        this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
      });
  }

  flickrSearch() {
    this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget', this.wgid, 'flickr']);
  }
}
