import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterestsComponent } from './interests/interests.component';
import { RandomComponent } from './random/random.component';
import { SerendipitousComponent } from './serendipitous/serendipitous.component';
import { MoviecardComponent } from './moviecard/moviecard.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestsComponent,
    RandomComponent,
    SerendipitousComponent,
    MoviecardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
