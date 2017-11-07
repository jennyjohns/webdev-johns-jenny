import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  @ViewChild('f') newWidgetForm: NgModel;
  widget = {};
  wgid: string;
  userId: string;
  webId: string;
  pageId: string;
  widgets = [];
  widgetType: string;
  text: string;
  rows: Number;
  name: string;
  placeholder: string;
  formatted: Boolean;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router
  ) { }

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
        this.widgetType = this.widget['widgetType'];
        this.text = this.widget['text'];
        this.rows = this.widget['rows'];
        this.name = this.widget['name'];
        this.placeholder = this.widget['placeholder'];
        this.formatted = this.widget['formatted'];
      });
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
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

  commit(text: string, type: string) {
    const updatedWidget = {
      _id: this.wgid,
      widgetType: type,
      pageId: this.widget['pageId'],
      text: text
    };
    this.widgetService.updateWidget(this.wgid, updatedWidget)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.widgetType = widget['widgetType'];
        this.text = widget['text'];
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
