import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'V34L';
  constructor( private store: Firestore) {}

}
