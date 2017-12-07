import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widget: any;
  widgets = [];
  wgid: string;
  pageId: string;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.wgid = params['wgid'];
        }
      );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
      });
    this.widgetService.findWidgetById(this.pageId, this.wgid)
      .subscribe((widget: any) => {
        // console.log('PAGEWIDGETS IN EDIT', pageWidgets);
        // for (let i = 0; i < pageWidgets.length; i++) {
        //   if (pageWidgets[i]._id === this.wgid) {
        //     this.widget = pageWidgets[i];
        //   }
        // }
        this.widget = widget;
      });
    console.log('IN WIDGET EDIT', this.widget);
  }

}
