import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {withIdentifier} from "codelyzer/util/astQuery";
import {SharedService} from "../../../services/shared.service.client";

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
  dateCreated: Date;

  constructor(private sharedService: SharedService, private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = this.sharedService.user['_id'];
          this.webId = params['wid'];
        }
      );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
      });
    this.dateCreated = new Date();
  }

  makeWidget(type: String) {
    this.widget = {widgetType: type, pageId: this.pageId};
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((page: any) => {
        this.widgets = page.widgets;
        const len = page.widgets.length;
        this.widget = page.widgets[len - 1];
        this.widget['widgetType'] = type;
        this.widgetType = type;
        this.widgetId = this.widget['_id'];
        console.log('IN CHOOSER', this.widget);
        this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget', this.widgetId]);
      });
    // console.log('IN CHOOSER', this.widget);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToWidgets() {
    this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget']);
  }

  chooseWidget() {
    this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget', 'new']);

  }

}
