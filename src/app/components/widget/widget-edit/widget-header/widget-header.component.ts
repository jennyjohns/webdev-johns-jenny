import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {NgModel} from '@angular/forms';
import {SharedService} from "../../../../services/shared.service.client";

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') newWidgetForm: NgModel;
  widget = {};
  wgid: string;
  userId: string;
  webId: string;
  pageId: string;
  widgets = [];
  widgetType: string;
  text: string;
  size: number;
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
        this.widget = widget;
        this.widgetType = this.widget['widgetType'];
        this.text = this.widget['text'];
        this.size = this.widget['size'];
        this.dateCreated = this.widget['dateCreated'];
      });
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
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

  commit(text: string, size: number, type: string) {
    const updatedWidget = {
      _id: this.wgid,
      widgetType: type,
      pageId: this.widget['pageId'],
      size: size,
      text: text,
      dateCreated: this.dateCreated
    };
    this.widgetService.updateWidget(this.wgid, updatedWidget)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.widgetType = widget['widgetType'];
        this.text = widget['text'];
        this.size = widget['size'];
        this.dateCreated = widget['dateCreated'];
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
