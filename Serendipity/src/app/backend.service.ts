import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface User {
  age: number;
  gender: string;
  genres: number[];
}

@Injectable({
 providedIn: 'root'
})

export class BackendService {

  constructor(private http: HttpClient) { }


  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8000/api/user', user)
  }

}
