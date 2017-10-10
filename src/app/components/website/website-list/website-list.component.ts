import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  website = {};
  websiteId: string;
  name: string;
  developerId: string;
  description: string;
  websites = [];

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.website = this._websiteService.findWebsitesByUser(this.userId);
    this.websiteId = this.website['_id'];
    this.name = this.website['name'];
    this.developerId = this.userId;
    this.description = this.website['description'];
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }


  goToProfile() {
    this.router.navigate(['user/', this.developerId]);
  }
}
