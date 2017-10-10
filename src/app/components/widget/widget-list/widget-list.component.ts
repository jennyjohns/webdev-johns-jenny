import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgetId: string;
  widgetType: string;
  pageId: string;
  userId: string;
  webId: string;
  size: number;
  widgets = [];
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }
  goToPages() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page']);
  }
  newWidget() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', 'new']);
  }
  editWidget(wgid) {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', wgid]);
  }
}
