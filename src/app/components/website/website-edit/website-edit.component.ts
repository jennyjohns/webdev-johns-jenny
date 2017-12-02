import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websiteId: string;
  website: any;
  name: string;
  developerId: string;
  description: string;
  websites = [];
  dateCreated: Date;
  user: {};
  constructor(private sharedService: SharedService, private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.user = this.sharedService.user;
          this.developerId = this.user['_id'];
        }
      );
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe((website: any) => {
        this.website = website;
        this.name = this.website['name'];
        this.developerId = this.website['developerId'];
        this.description = this.website['description'];
        this.dateCreated = website['dateCreated'];
      });
    this.websiteService.findWebsitesByUser(this.developerId)
      .subscribe((websites: any) => {
        this.websites = websites;
      });
  }
  editWebsite(webId: string) {
    this.websiteService.findWebsiteById(webId)
      .subscribe((website: any) => {
        this.website = website;
        this.name = this.website['name'];
        this.description = this.website['description'];
        this.router.navigate(['user/website', webId]);

      });
  }
  commit(wid, name, description) {
    this.website = {_id: wid, name: name, developerId: this.developerId, description: description};
    this.websiteService.updateWebsite(wid, this.website)
      .subscribe((website: any) => {
        this.website = website;
        this.name = website['name'];
        this.description = website['description'];
        this.router.navigate(['user/website']);
      });
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  deleted(webId) {
    this.websiteService.deleteWebsite(webId)
      .subscribe((websites: any) => {
        this.router.navigate(['user/website']);
      });
  }
  newWebsite() {
    this.router.navigate(['user/website', 'new']);
  }
  goToPages(webId) {
    this.router.navigate(['user/website', webId, 'page']);
  }
  cancel() {
    this.router.navigate(['user/website']);
  }
}
