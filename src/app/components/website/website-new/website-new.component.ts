import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  name: string;
  description: string;
  userId: string;
  website: any;
  developerId: string;
  websites = [];
  dateCreated: Date;
  user: {};

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user;
          this.userId = this.user['_id'];
        }
      );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
        this.websites = websites;
      });
    this.developerId = this.userId;
    this.dateCreated = new Date();
  }

  newWebsite() {
    this.name = this.websiteForm.value.name;
    this.description = this.websiteForm.value.description;
  }

  commit(name: string, description: string) {
    this.website = {name: name, developerId: this.developerId, description: description, dateCreated: this.dateCreated};
    this.websiteService.createWebsite(this.developerId, this.website)
      .subscribe((website: any) => {
        this.website = website;
        this.router.navigate(['user/website']);
      });
  }

  editWebsite(webId) {
    this.router.navigate(['user/website', webId]);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToNewWebsite() {
    this.router.navigate(['user/website/new']);
  }

  cancel() {
    this.router.navigate(['user/website']);
  }
  goToPages(webId) {
    this.router.navigate(['user/website', webId, 'page']);
  }
}
