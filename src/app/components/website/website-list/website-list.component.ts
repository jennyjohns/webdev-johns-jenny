import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites = [];
  user: {};

  constructor(private sharedService: SharedService, private _websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user;
          this.userId = this.user['_id'];
        }
      );
    this._websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
        this.websites = websites;
      });
  }

  newWebsite() {
    this.router.navigate(['user/website/new']);
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToPages(webId) {
    this.router.navigate(['user/website', webId, 'page']);
  }
}
