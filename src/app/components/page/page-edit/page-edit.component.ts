import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') newPageForm: NgModel;
  pageId: string;
  userId: string;
  page = {};
  name: string;
  websiteId: string;
  description: string;
  pages = [];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          console.log(this.websiteId);

        }
      );
    this.pageService.findPageById(this.pageId)
      .subscribe((page: any) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
      });
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe((pages: any) => {
        this.pages = pages;
      });
  }

  goToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  commit(pid: string, name: string, description: string) {
    this.page = {_id: pid, name: name, websiteId: this.websiteId, description: description};
    this.pageService.updatePage(pid, this.page)
      .subscribe((page: any) => {
        this.page = page;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
      });
  }

  editPage(pgId) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId]);
    this.pageService.findPageById(pgId)
      .subscribe((page: any) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
      });
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
  goToWidgets(pgId) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId, 'widget']);
  }
  deleted(pid) {
    this.pageService.deletePage(pid);
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
  }
}
