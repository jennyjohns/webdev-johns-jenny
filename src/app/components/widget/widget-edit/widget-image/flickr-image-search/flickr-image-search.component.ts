import {Component, OnInit, ViewChild} from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../../services/widget.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from "../../../../../services/shared.service.client";

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

  constructor(private sharedService: SharedService, private flickrService: FlickrService, private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = this.sharedService.user['_id'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.wgid = params['wgid'];
        });
    this.widgetService.findWidgetById(this.pageId, this.wgid)
      .subscribe((widget: any) => {
        // for (let i = 0; i < pageWidgets.length; i++) {
        //   if (pageWidgets[i]._id === this.wgid) {
        //     this.widget = pageWidgets[i];
        //   }
        // }
        this.widget = widget;
      });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe((data: any) => {
        let val = data._body;
        val = val.replace('jsonFlickrApi(', '');
        val = val.substring(0, val.length - 1);
        val = JSON.parse(val);
        this.photos = val.photos;
      });
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget['url'] = url;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe((widget: any) => {
        this.router.navigate(['user/website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  chooseWidget() {
    this.router.navigate(['user/website', this.websiteId, 'page', this.pageId, 'widget']);
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
