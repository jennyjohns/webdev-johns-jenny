import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widget: any;
  widgetType: string;
  pageId: string;
  userId: string;
  webId: string;
  size: number;
  widgets = [];
  rows: Number;
  placeholder: string;
  constructor(private sharedService: SharedService, private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private sanitizer: DomSanitizer) { }

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
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  goToPages() {
    this.router.navigate(['user/website', this.webId, 'page']);
  }
  newWidget() {
    this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget', 'new']);
  }
  editWidget(wgid: string, type: string) {
    this.widgetService.findWidgetById(this.pageId, wgid)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.widgetType = type;
        this.router.navigate(['user/website', this.webId, 'page', this.pageId, 'widget', wgid]);
      });
  }
  cleanURL(url: string) {
    let youTubeURL = 'https://www.youtube.com/embed/';
    const end = url.split('/');
    youTubeURL += end[end.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(youTubeURL);
  }
  onIndexChange(event) {
     this.widgetService.sortingWidgets(this.pageId, event.start, event.stop)
       .subscribe((widgets: any) => {
          this.widgets = widgets;
       });
  }
}
