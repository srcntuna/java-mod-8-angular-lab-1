import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   models = [
    {
      name: "Cristiano Ronaldo",
      sport: "Soccer",
      active: true,
    },
    {
      name: "Michael Jordan",
      sport: "NBA Basketball",
      active: false,
    },
    {
      name: "Andre Agassi",
      sport: "Tennis",
      active: false,
    }
  ];

}
