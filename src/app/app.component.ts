import { Component } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular 2 member names";
  members = ["Oddy", "Mohamed", "Thomas", "Tamara", "Felipe"];
  person = this.members[0];
}
