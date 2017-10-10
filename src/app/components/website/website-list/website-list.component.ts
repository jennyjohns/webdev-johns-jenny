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
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }

  newWebsite() {
    this.router.navigate(['user/', this.userId, 'website', 'new']);
  }
  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  goToPages(webId) {
    console.log(webId);
    this.router.navigate(['user/', this.userId, 'website', webId, 'page']);
  }
}
