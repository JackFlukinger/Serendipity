import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
