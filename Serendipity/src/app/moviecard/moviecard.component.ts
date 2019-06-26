import { Component, OnInit, Input } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { BackendService, Movie } from '../backend.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({height:0}),
        animate('0.1s ease-out', style({height:'*'}))
      ])
    ])
  ]
})
export class MoviecardComponent implements OnInit {
  @Input() aMovie: Movie; //recieves input from component call in random.compononent.html
  
  stars = 0;
  tempstars = 0;
  completed = 0

  title: string;
  ageRating: string;
  year: number;

  constructor( private backend: BackendService) { }

  setCardInfo (movie: Movie){
    this.title = movie.name;
    this.ageRating = movie.ageRating;
    this.year = movie.year;
  }

  addStars(){
    console.log("You rated this movie: ", this.stars, "stars")
    this.completed = 1;
    //this.backend.addRandomMovieRating(this.aMovie, this.stars);
  }

  ngOnInit() {
    this.setCardInfo(this.aMovie)
  }

}
