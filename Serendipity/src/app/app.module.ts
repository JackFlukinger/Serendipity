import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { InterestsComponent } from './interests/interests.component';
import { RandomComponent } from './random/random.component';
import { SerendipitousComponent } from './serendipitous/serendipitous.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { HaveseenComponent } from './haveseen/haveseen.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestsComponent,
    RandomComponent,
    SerendipitousComponent,
    MoviecardComponent,
    HaveseenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
