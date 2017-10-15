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
  widgetType: string;
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
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

  makeWidget(type: string) {
    this.widgetType = type;
    this.widget = { widgetType: type};
    this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    this.widgetId = this.widget['_id'];
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', this.widgetId]);

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
