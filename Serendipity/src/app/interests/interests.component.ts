import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  profileForm = new FormGroup({
    age: new FormControl(''),
    gender: new FormControl(''),
    occupation: new FormControl('')
  });

  genres: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Children's",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Film-Noir",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ]

  //when the user clicks, get the genre that they click on and the use that to change the value of likedgenres at that index
  likedgenres: boolean[] = new Array(this.genres.length)
  toggleGenre(index:number){
    this.likedgenres[index] = !this.likedgenres[index]
  }

  //change the color of an item when the user clicks
  changeColor(event: Event){
      var elementId: string = (event.target as Element).id;
      elementId.bold();
      console.log("Has been clicked" + elementId);
  }

  

  constructor() { }

  ngOnInit() {
  }

}
