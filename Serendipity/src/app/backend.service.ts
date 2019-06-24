import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { AppComponent } from './app.component';

export interface User {
  age: number;
  gender: string;
  email: string;
  genres: number[];
}

export interface Movie {
  id: number,
  name: string,
  year: number,
  ageRating: string,
  poster: string
}

@Injectable({
 providedIn: 'root',
})

export class BackendService {

  private stage: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public $stage: Observable<number> = this.stage.asObservable();

  constructor(
    private http: HttpClient) { }

  ngOnInit() {

  }

  public updateStage() {
    this.http.get("http://localhost:8000/api/users").subscribe(
      data  => {
        this.stage.next((data as any).stage);
        console.log(this.stage);
    }, error  => {
      console.log("Error", error);
    });
  }

  addUser(user: User) {

    let headers = new HttpHeaders({
    'Content-Type': 'application/json'
     });

     let options = {
        headers: headers
     }

    this.http.post("http://localhost:8000/api/users", {
      "age":  user.age,
      "gender":  user.gender,
      "email":  user.email,
      "likedgenres": user.genres
    }, options).subscribe(
      data  => {
        console.log((data as any).result);
        if ((data as any).result == "success") {
          console.log("updating stage");
          this.updateStage();
        } else {

        }
    }, error  => {
      console.log("Error", error);
    });
  }

  getRandom() {
    let test:Movie = {
      id: 4,
      name: "The Test of Test",
      year: 2008,
      ageRating: "PG-13",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX800.jpg"
    };

    let test2:Movie = {
      id: 2,
      name: "Second Movie",
      year: 2011,
      ageRating: "PG-13",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX800.jpg"
    };

    let test3:Movie = {
      id: 7,
      name: "The Third Movie",
      year: 2018,
      ageRating: "PG",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX800.jpg"
    };

    let movies = [test, test2, test3];

    return movies;
  }

}
