import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from './../../firebase.config';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
