import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {map} from "rxjs/operator/map";


// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }
  baseURL = environment.baseUrl;
  api = {
    'createWidget': this.createWidget,
    'findWidgetByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
    'sortingWidgets' : this.sortingWidgets
  };

  createWidget(pageId: string, widget: any) {
    const url = this.baseURL + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWidgetsByPageId(pageId: string) {
    const url = this.baseURL + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      } );
  }

  findWidgetById(widgetId: string) {
    const url = this.baseURL + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWidget(widgetId: string, widget: any) {
    const url = this.baseURL + '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWidget(widgetId: string) {
    const url = this.baseURL + '/api/widget/' + widgetId;
    return this.http.delete(url);
  }

  sortingWidgets (pageId: string, start: Number, stop: Number) {
    // app.put("/api/page/:pid/widget", sortingWidgets);
    const url = this.baseURL + '/api/page/' + pageId + '/widget?initial=' + start + '&final=' + stop;
    return this.http.put(url, start)
      .map((response: Response) => {
        return response.json();
      });
  }
}
