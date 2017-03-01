import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2/index';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings: {};//FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    // this.trainings = af.database.list('trainings');
  }

  ngOnInit() {
  }

}
