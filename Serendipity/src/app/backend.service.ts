import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { AppComponent } from './app.component';


export interface User {
  age: number;
  gender: string;
  email: string;
  genres: number[];
}

@Injectable({
 providedIn: 'root'
})

export class BackendService {

  constructor(
    private http: HttpClient) { }

  ngOnInit() {

  }

  public fetchStage(): Observable<number> {
    return <Observable<number>>this.http.get("http://localhost:8000/api/users");
  }

  addUser(user: User) {
    this.http.post("http://localhost:8000/api/users", {
      "age":  user.age,
      "gender":  user.gender,
      "email":  user.email,
      "likedgenres": user.genres
    }).subscribe(
      data  => {
        console.log("Next stage");
    }, error  => {
      console.log("Error", error);
    });

  }

}