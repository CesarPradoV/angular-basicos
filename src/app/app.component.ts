import { Component } from '@angular/core'; //Decorador de componentes

//invoca al decorador de componentes
@Component({
  selector: 'app-root', // esta etiqueta aparece en el index.html
  templateUrl: 'app.component.html' //html que servira para mostrar la informacion
  //template: '<span>Fernando</span>' //mostrará la informacion html que se le defina despues de los dos puntos, ignorando el contenido del app.component.html
})
export class AppComponent {
  public titulo: string = 'Contador App'; //podemos colocar que es public aun cuando por defecto es public
  numero: number = 10;
  base: number = 5;

  sumar(){
    this.numero += 1;
  }
  restar(){
    this.numero -= 1;
  }

  acumular(valor: number){
    this.numero += valor;
  }

  acumular2(valor: number){
    this.numero += valor;
  }
  

  

}
