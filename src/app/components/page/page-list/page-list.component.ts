import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pageId: string;
  name: string;
  websiteId: string;
  userId: string;
  description: string;
  pages = [];
  user: {};

  constructor(private sharedService: SharedService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.user = this.sharedService.user;
          this.userId = this.user['_id'];
        }
      );
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe((pages: any) => {
        this.pages = pages;
      });
  }

  editPage(pgId) {
    this.router.navigate(['user/website', this.websiteId, 'page', pgId]);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  newPage() {
    this.router.navigate(['user/website', this.websiteId, 'page', 'new']);
  }

  goToWebsites() {
    this.router.navigate(['user/website']);
  }

  goToWidgets(pgId) {
    this.router.navigate(['user/website', this.websiteId, 'page', pgId, 'widget']);
  }
}
