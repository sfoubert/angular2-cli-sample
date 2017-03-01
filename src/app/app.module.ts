import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from './../../firebase.config';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TodosComponent } from './todos/todos.component';

const appRoutes:Routes = [
  {path : 'trainings', component: TrainingsComponent},
  {path : 'todos', component: TodosComponent},
  {path : '**', component: TrainingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
