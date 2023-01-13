import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-14-15';

  titulo = "Data Binding Interpolation";

  button:string = "Show";

  mostrar:boolean = false;
  
  text:string = "El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor también se actualiza en el modelo de datos"

  
  
  Mostrar() {

    if(this.mostrar){
      this.button = "Show";
      this.mostrar = !this.mostrar;

    }else{
      this.button = "Hide";
      this.mostrar = !this.mostrar;
    }

  }



}
