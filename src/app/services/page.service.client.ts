import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';


// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) { }
  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId: string, page: any) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPageByWebsiteId(websiteId: string) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findPageById(pageId: string) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updatePage(pageId: string, page: any) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.put(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }
  deletePage(pageId: string) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.delete(url);
  }
}
