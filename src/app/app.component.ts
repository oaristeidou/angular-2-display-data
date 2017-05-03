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
    new Member(2, "Mohamed", "Asfour"),
    new Member(3, "Thomas", "Holubar"),
    new Member(4, "Tamara", ""),
    new Member(5, "Felipe", "Holeen"),
  ];
  member = this.members[0];

  clickMessage = '';
  onClickButton() {
    this.clickMessage = "You have clicked me! This is fun!";
  }

  value = '';
  onKeyUpEnter(value: string) {
    this.value = value;
  }

}
