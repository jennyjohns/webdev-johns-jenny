import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  pageId: string;
  userId: string;
  page = {};
  name: string;
  websiteId: string;
  description: string;
  pages = [];
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
        }
      );
    this.page = this.pageService.findPageById(this.pageId);
    this.name = this.page['name'];
    this.websiteId = this.page['websiteId'];
    this.description = this.page['description'];
    this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
  }
  buttonClicked(event: any) {
    console.log(event);
  }
  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }
  editPage(pgId) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId]);
    this.page =  this.pageService.findPageById(pgId);
    this.name = this.page['name'];
    this.description = this.page['description'];
  }
  goToPages() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
  }

  newPage() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
  }
  goToWebsites() {
    this.router.navigate(['user/', this.userId, 'website']);
  }
}
