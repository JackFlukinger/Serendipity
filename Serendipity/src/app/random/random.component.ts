import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { BackendService, Movie } from '../backend.service';
import { MoviecardComponent } from '../moviecard/moviecard.component';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  moviesToRate = 10;

  moviesRated = 0;

  moviesLeft = this.moviesToRate - this.moviesRated;

  movies: Movie[]


  constructor(
    private backend: BackendService
  ) {

   }

   


  ngOnInit() {
    //Get movies info from db at random index
     this.movies = this.backend.getRandom()

    

  }

}
