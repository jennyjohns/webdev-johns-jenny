import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';

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

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.developerId = this.userId;
  }

  newWebsite() {
    this.name = this.websiteForm.value.name;
    this.description = this.websiteForm.value.description;
  }

  commit(name, description) {
    this.website = {name, description};
    this.websiteService.createWebsite(this.developerId, this.website);
    this.router.navigate(['user/', this.developerId, 'website']);
  }

  editWebsite(webId) {
    this.router.navigate(['user/', this.developerId, 'website', webId]);
  }

  goToProfile() {
    this.router.navigate(['user/', this.developerId]);
  }

  goToNewWebsite() {
    this.router.navigate(['user/', this.userId, 'website', 'new']);
  }

  cancel() {
    this.router.navigate(['user/', this.developerId, 'website']);
  }
  goToPages(webId) {
    this.router.navigate(['user/', this.userId, 'website', webId, 'page']);
  }
}
