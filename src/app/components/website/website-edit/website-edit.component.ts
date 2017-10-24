import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.developerId = params['uid'];
        }
      );
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe((website: any) => {
        this.website = website;
        console.log(this.website);
        this.name = this.website['name'];
        console.log(website['name']);
        this.developerId = this.website['developerId'];
        this.description = this.website['description'];
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
        this.router.navigate(['user/', this.developerId, 'website', webId]);

      });
  }
  commit(wid, name, description) {
    this.website = {_id: wid, name: name, developerId: this.developerId, description: description};
    this.websiteService.updateWebsite(wid, this.website)
      .subscribe((website: any) => {
        this.website = website;
        this.name = website['name'];
        this.description = website['description'];
        this.router.navigate(['user/', this.developerId, 'website']);
      });
  }
  goToProfile() {
    this.router.navigate(['user/', this.developerId]);
  }
  deleted(webId) {
    this.websiteService.deleteWebsite(webId)
      .subscribe((websites: any) => {
        this.router.navigate(['user/', this.developerId, 'website']);
      });
  }
  newWebsite() {
    this.router.navigate(['user/', this.developerId, 'website', 'new']);
  }
  goToPages(webId) {
    this.router.navigate(['user/', this.developerId, 'website', webId, 'page']);
  }
  cancel() {
    this.router.navigate(['user/', this.developerId, 'website']);
  }
}
