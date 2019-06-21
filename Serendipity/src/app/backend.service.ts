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

}
