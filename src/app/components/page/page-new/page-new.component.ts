import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";

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
  dateCreated: Date;
  user: {};

  constructor(private sharedService: SharedService, private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = this.sharedService.user['_id'];
          this.webId = params['wid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.webId)
      .subscribe((pages: any) => {
        this.pages = pages;
      });
    this.dateCreated = new Date();
  }

  newPage() {
    this.name = this.newPageForm.value.name;
    this.title = this.newPageForm.value.title;
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  editPage(pgId) {
    this.router.navigate(['user/website', this.webId, 'page', pgId]);
    this.pageService.findPageById(pgId)
      .subscribe((page: any) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
        this.dateCreated = page['dateCreated'];
      });
  }

  goToPages() {
    this.router.navigate(['user/website', this.webId, 'page']);
}

  commit(name: string, description: string) {
    this.page = {name: name, websiteId: this.webId, description: description, dateCreated: this.dateCreated};
    this.pageService.createPage(this.webId, this.page)
      .subscribe((page: any) => {
        this.page = page;
        this.router.navigate(['user/website', this.webId, 'page']);
      });
  }

  goToWidgets(pgId) {
    this.router.navigate(['user/website', this.webId, 'page', pgId, 'widget']);
  }
}
