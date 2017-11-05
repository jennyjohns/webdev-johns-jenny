import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') newPageForm: NgModel;
  name: string;
  title: string;
  pageId: string;
  userId: string;
  webId: string;
  pages = [];
  page: any;
  description: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.webId = params['wid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.webId)
      .subscribe((pages: any) => {
        this.pages = pages;
      });
  }

  newPage() {
    this.name = this.newPageForm.value.name;
    this.title = this.newPageForm.value.title;
  }

  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  editPage(pgId) {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', pgId]);
    this.pageService.findPageById(pgId)
      .subscribe((page: any) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
      });
  }

  goToPages() {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page']);
  }

  commit(name: string, description: string) {
    this.page = {name: name, websiteId: this.webId, description: description};
    this.pageService.createPage(this.webId, this.page)
      .subscribe((page: any) => {
        this.page = page;
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page']);
      });
  }

  goToWidgets(pgId) {
    this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', pgId, 'widget']);
  }
}
