import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currName:string = '';
  currSport:string = '';
  status:boolean = false;

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


 updateStatus():void {

  if (this.status){
    this.status = false;
  }else{
    this.status = true;
  }


 }

 onAddModel():void {

  let newModel = {
    name : this.currName,
    sport: this.currSport,
    active: this.status
  }

  this.models.push(newModel);


  this.currName = '';
  this.currSport = '';

 }


}
