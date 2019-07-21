import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyClHz_9t3T28jUNWFCGYHtSuy8VIizrpik ',
      authDomain: 'posts-5855f.firebaseapp.com',
      databaseURL: 'https://posts-5855f.firebaseio.com/',
      projectId: 'posts-5855f',
      storageBucket: 'posts-5855f.appspot.com',
      messagingSenderId: '6634573823'
    };
    firebase.initializeApp(config);
  }

}
