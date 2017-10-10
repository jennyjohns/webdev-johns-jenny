import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.userId = params['uid'];
        }
      );
    this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
  }

  editPage(pgId) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId]);
  }

  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  newPage() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
  }

  goToWebsites() {
    this.router.navigate(['user/', this.userId, 'website']);
  }

}
