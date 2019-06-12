import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  title = "Test Movie";
  ageRating = "PG-13";
  year = "2001";


  constructor() { }

  ngOnInit() {
  }

}
