import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private http: Http) { }
  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(developerId: string, website: any) {
    const url = 'http://localhost:3100/api/user/' + developerId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsitesByUser(developerId: string) {
    const url = 'http://localhost:3100/api/user/' + developerId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(websiteId: string) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updateWebsite(websiteId: string, website: any) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteWebsite(websiteId: string) {
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.delete(url);
  }
}
