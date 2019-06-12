import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  moviesToRate = 10;

  moviesRated = 0;

  moviesLeft = this.moviesToRate - this.moviesRated;

  constructor() {

   }

  ngOnInit() {


  }

}
