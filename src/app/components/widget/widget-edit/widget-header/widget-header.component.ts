import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widget = {};
  wgid: string;
  userId: string;
  webId: string;
  pageId: string;
  widgets = [];
  widgetType: string;
  text: string;
  size: number;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router, private sanitizer: DomSanitizer) {
  }

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
    this.widget = this.widgetService.findWidgetById(this.wgid);
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    this.widgetType = this.widget['widgetType'];
    this.text = this.widget['text'];
    this.size = this.widget['size'];
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

  editWidget(wgid) {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', wgid]);
    this.widget = this.widgetService.findWidgetById(wgid);
    this.widgetType = this.widget['widgetType'];
    this.text = this.widget['text'];
    this.size = this.widget['size'];
  }
  cleanURL(url: string) {
    let youTubeURL = 'https://www.youtube.com/embed/';
    const end = url.split('/');
    youTubeURL += end[end.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(youTubeURL);
  }
}
