import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websiteId: string;
  website = {};
  name: string;
  developer: string;
  description: string;
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
        }
      );
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    this.developer = this.website['developerId'];
    this.description = this.website['description'];
  }

}
