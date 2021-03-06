import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgModel} from "@angular/forms";
import {SharedService} from "../../../services/shared.service.client";

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
  dateCreated: Date;


  constructor(private sharedService: SharedService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pageId = params['pid'];
          this.userId = this.sharedService.user['_id'];
          this.websiteId = params['wid'];
        }
      );
    this.pageService.findPageById(this.pageId)
      .subscribe((page: any) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
        this.dateCreated = page['dateCreated'];
      });
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe((pages: any) => {
        this.pages = pages;
      });
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  commit(pid: string, name: string, description: string) {
    this.page = {_id: pid, name: name, websiteId: this.websiteId, description: description, dateCreated: this.dateCreated};
    this.pageService.updatePage(pid, this.page)
      .subscribe((page: any) => {
        this.page = page;
        this.router.navigate(['user/website', this.websiteId, 'page']);
      });
  }

  editPage(pgId) {
    this.router.navigate(['user/website', this.websiteId, 'page', pgId]);
    this.pageService.findPageById(pgId)
      .subscribe((page: any) => {
        this.page = page;
        this.name = this.page['name'];
        this.description = this.page['description'];
        this.dateCreated = page['dateCreated'];
      });
  }

  goToPages() {
    this.router.navigate(['user/website', this.websiteId, 'page']);
  }

  newPage() {
    this.router.navigate(['user/website', this.websiteId, 'page', 'new']);
  }

  goToWidgets(pgId) {
    this.router.navigate(['user/website', this.websiteId, 'page', pgId, 'widget']);
  }
  deleted(pid) {
    this.pageService.deletePage(pid)
      .subscribe((pages: any) => {
        this.router.navigate(['user/website', this.websiteId, 'page']);
      });
  }
}
