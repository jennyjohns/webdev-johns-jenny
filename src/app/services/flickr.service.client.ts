import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class FlickrService {
  constructor(private http: Http) {
  }

  api = {
    'searchPhotos': this.searchPhotos
  };

  key = '93716fb0cbfb4174f4207ce92dcebfe8';
  secret = '6a3e2889118cafa0';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }

}
