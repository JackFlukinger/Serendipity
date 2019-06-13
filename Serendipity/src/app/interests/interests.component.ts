import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { element } from 'protractor';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  profileForm: FormGroup;

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
    this.likedgenres[index] = !this.likedgenres[index];
    console.log("Has been clicked" + index);
    console.log(this.likedgenres);
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    //if (this.profileForm.valid) {
    console.log("Form Submitted!");
    //}
    //else{
    //console.warn(this.profileForm.value);
    //}
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(1), Validators.max(110), Validators.pattern('[^[1-9]+$')]],
      gender: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      occupation: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    }
    //{validator:  }
    );
  }

}
