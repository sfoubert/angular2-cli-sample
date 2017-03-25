/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TodosComponent } from './todos/todos.component';
import { MoviesComponent } from './movies/movies.component';

import { AngularFireModule } from 'angularfire2/index';
import { RouterModule, Routes } from '@angular/router';
import { firebaseConfig } from './../../firebase.config';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from "@angular/common";

const appRoutes:Routes = [
  {path : 'movies', component: MoviesComponent},
  {path : 'trainings', component: TrainingsComponent},
  {path : 'todos', component: TodosComponent},
  {path : '**', component: TrainingsComponent}
];

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TrainingsComponent,
        MoviesComponent,
        TodosComponent,
      ],
      imports: [
        HttpModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render trainings in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Trainings');
  }));
});
