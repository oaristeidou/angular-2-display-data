import { Component } from '@angular/core';
import {Member} from './member';

@Component({
  selector: 'app-display-data',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular 2 member names";
  members = [
    new Member(1, "Odyssefs", "Aristeidou"),
    new Member(1, "Mohamed", "Asfour"),
    new Member(1, "Thomas", "Holubar"),
    new Member(1, "Tamara", ""),
    new Member(1, "Felipe", "Holeen"),
  ];
  person = this.members[0];
}
