import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class MoviesService {

  constructor(private http_: Http) {
    console.log('MoviesService created');
  }

  findMovies(): Observable<Array<Object>> {
    return this.http_.get('./movies.json')
      .map(response => response.json());
  }

}
