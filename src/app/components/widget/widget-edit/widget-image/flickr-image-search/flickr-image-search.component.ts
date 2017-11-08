import {Component, OnInit, ViewChild} from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  @ViewChild('f') flickrSearchForm: NgForm;

  searchText: string;
  photos: {};
  websiteId: string;
  pageId: string;
  wgid: string;
  widget: {};
  userId: string;

  constructor(private flickrService: FlickrService, private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.wgid = params['wgid'];
        });
    this.widgetService.findWidgetById(this.wgid)
      .subscribe((widget: any) => {
        this.widget = widget;
      });
  }

  searchPhotos() {
    console.log('outside' + this.searchText);
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe((data: any) => {
        console.log(data);
        let val = data._body;
        val = val.replace('jsonFlickrApi(', '');
        val = val.substring(0, val.length - 1);
        val = JSON.parse(val);
        console.log(val);
        this.photos = val.photos;
      });
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget['url'] = url;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
    const widget = {
      websiteId: this.websiteId,
      pageId: this.pageId,
      url: url
    };
  }
}
