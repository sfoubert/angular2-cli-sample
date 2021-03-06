import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from './../../firebase.config';

import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TodosComponent } from './todos/todos.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes:Routes = [
  {path : 'movies', component: MoviesComponent},
  {path : 'trainings', component: TrainingsComponent},
  {path : 'todos', component: TodosComponent},
  {path : '**', component: TrainingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    TodosComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
