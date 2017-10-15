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
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    this.developerId = this.website['developerId'];
    this.description = this.website['description'];
    this.websites = this.websiteService.findWebsitesByUser(this.developerId);
  }
  editWebsite(webId) {
      this.router.navigate(['user/', this.developerId, 'website', webId]);
      this.website = this.websiteService.findWebsiteById(webId);
      this.name = this.website['name'];
      this.description = this.website['description'];

  }
  commit(wid, name, description) {
    this.website = {_id: wid, name: name, developerId: this.developerId, description: description};
    this.websiteService.updateWebsite(wid, this.website);
    this.router.navigate(['user/', this.developerId, 'website']);
  }
  goToProfile() {
    this.router.navigate(['user/', this.developerId]);
  }
  deleted(webId) {
    this.websiteService.deleteWebsite(webId);
    this.router.navigate(['user/', this.developerId, 'website']);
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
