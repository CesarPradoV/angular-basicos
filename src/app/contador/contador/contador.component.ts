import { Component } from '@angular/core' //agregamos esto para que sea algo propio de angular

@Component({
    selector: 'app-contador',
    template: 
    `
    <h1> {{titulo}} </h1> <!--invoca al title del app.component.ts-->

    <h3> la base es: <strong> {{ base }} </strong></h3>
    <button (click)="acumular2( base )"> + {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular2( - base )"> - {{base}}</button>
    
    `
})

export class ContadorComponent { // agregamos export porque la quiero utilizar en otros lugares fuera de este archivo
    public titulo: string = 'Contador App'; //podemos colocar que es public aun cuando por defecto es public
    numero: number = 10;
    base: number = 5;

    acumular2(valor: number){
        this.numero += valor;
      }
}
