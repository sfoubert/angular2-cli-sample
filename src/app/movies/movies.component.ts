import {Component, OnInit} from '@angular/core';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

  movies: Array<Object>;

  constructor(private moviesService_: MoviesService) {
    moviesService_.findMovies()
      .subscribe(movies => {
          this.movies = movies;
        },
        error => console.log(error));
  }

  ngOnInit() {
  }

}
