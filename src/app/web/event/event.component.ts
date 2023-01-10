import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: '<button class="form-control" (click)="MostrarDiv()">{{button}}</button>',

})
export class EventComponent {

  private show:boolean = true;

  button:string = "hide";

  MostrarDiv(){
    this.show = !this.show;
    
    if (this.show = false){
      this.button = "show";
    } else if (this.show = true){
      this.button = "hide";
    }
  }

}
