import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
 providedIn: 'root'
})

export class BackendService {

  $stage: Observable<number>;

  constructor(
    private http: HttpClient) { }

  ngOnInit() {

  }

  public updateStage() {
    this.$stage = this.http.get("http://localhost:8000/api/users").pipe(map(data => parseInt(<string> (data as any).stage)));
  }

  public getStage() {
    return this.$stage;
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
          this.updateStage();
        }
    }, error  => {
      console.log("Error", error);
    });
  }

}
