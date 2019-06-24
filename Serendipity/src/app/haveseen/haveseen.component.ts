import { Component, OnInit } from '@angular/core';
import { BackendService, Movie } from '../backend.service';


@Component({
  selector: 'app-haveseen',
  templateUrl: './haveseen.component.html',
  styleUrls: ['./haveseen.component.scss']
})
export class HaveseenComponent implements OnInit {

  index: number;
  movies: Movie[];

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.index = 0;
    this.movies = this.backend.getRandom();

  }

  next() {
    if (this.index + 1 < this.movies.length) {
      this.index = this.index + 1;
    }
  }

}
