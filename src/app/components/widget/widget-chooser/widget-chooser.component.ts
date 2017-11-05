import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  widgetId: string;
  widgetType: String;
  pageId: string;
  userId: string;
  webId: string;
  size: number;
  widgets = [];
  widget = {};

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.webId = params['wid'];
        }
      );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
      });
  }

  makeWidget(type: String) {
    this.widget = {widgetType: type, pageId: this.pageId};
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
        const len = widgets.length;
        this.widget = widgets[len - 1];
        this.widget['widgetType'] = type;
        this.widgetType = type;
        this.widgetId = this.widget['_id'];
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', this.widgetId]);
      });
  }

  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  goToWidgets() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
  }

  chooseWidget() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', 'new']);

  }

}
