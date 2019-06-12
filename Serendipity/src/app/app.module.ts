import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterestsComponent } from './interests/interests.component';
import { RandomComponent } from './random/random.component';
import { SerendipitousComponent } from './serendipitous/serendipitous.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestsComponent,
    RandomComponent,
    SerendipitousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
