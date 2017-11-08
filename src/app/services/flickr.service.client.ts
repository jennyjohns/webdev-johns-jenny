import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()

export class FlickrService {
  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;
  api = {
    'searchPhotos': this.searchPhotos
  };

  key = 'your-flickr-key';
  secret = 'your-flickr-secret';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }

}
