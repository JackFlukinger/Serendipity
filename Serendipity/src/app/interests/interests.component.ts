import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { BackendService, User } from '../backend.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
  providers: [ BackendService ],
  animations: [
  trigger('slide', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({height:0}),
      animate('0.2s ease-out', style({height:'*'}))
    ]),
    transition(':leave', [   // :enter is alias to 'void => *'
      style({height:'*'}),
      animate('0.2s ease-out', style({height:0}))
    ])
  ])
]
})

export class InterestsComponent implements OnInit {

  showDropdown: boolean;

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

  getNumOfLikedGenres() {
    let num = 0;
    for (let genre in this.likedgenres) {
      if (genre) {
        num = num + 1;
      }
    }
    return num;
  }

  constructor(
    private fb: FormBuilder,
    private backend: BackendService
  ) { }

  ngOnInit() {

    this.showDropdown = false;

    this.profileForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(0), Validators.max(110)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log("Form Submitted!");
    let g: number[] = new Array(this.getNumOfLikedGenres());
    let index = 0;

    for (let i = 0; i < this.likedgenres.length; i++) {
      if (this.likedgenres[i]) {
        g[index] = i;
        index++;
      }
    }

    let user : User = {
      age : this.profileForm.get('age').value,
      email : this.profileForm.get('email').value,
      gender : this.profileForm.get('gender').value,
      genres : g
    }
    console.log(user);
    //this.backend.addUser(user);
  }

}
