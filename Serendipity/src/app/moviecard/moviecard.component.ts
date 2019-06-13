import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss'],
  animations: [
  trigger('slideDown', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({height:0}),
      animate('0.1s ease-out', style({height:'*'}))
    ])
  ])
]
})
export class MoviecardComponent implements OnInit {

  stars = 0;
  tempstars = 0;

  title = "Test Movie";
  ageRating = "PG-13";
  year = "2001";


  constructor() { }

  ngOnInit() {
  }

}
