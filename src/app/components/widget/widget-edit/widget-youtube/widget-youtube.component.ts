import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from '@angular/forms';
import {SharedService} from "../../../../services/shared.service.client";

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
    this.widgetService.findWidgetById(this.pageId, this.wgid)
      .subscribe((widget: any) => {
        // for (let i = 0; i < pageWidgets.length; i++) {
        //   if (pageWidgets[i]._id === this.wgid) {
        //     this.widget = pageWidgets[i];
        //   }
        // }
        this.widget = widget;
        this.url = this.widget['url'];
        this.widgetType = this.widget['widgetType'];
        this.width = this.widget['width'];
        this.dateCreated = this.widget['dateCreated'];
      });
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((page: any) => {
        this.widgets = page.widgets;
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
        this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
      });
  }

  deleted(wgid) {
    this.widgetService.deleteWidget(wgid)
      .subscribe((widgets: any) => {
        this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
      });
  }
}
