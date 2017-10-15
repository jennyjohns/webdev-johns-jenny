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
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.wgid = params['wgid'];
        }
      );
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    this.widget = this.widgetService.findWidgetById(this.wgid);
  }

  ngOnInit() {
  }

}
