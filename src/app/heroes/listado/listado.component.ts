import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor(){ // se ejecuta antes de la renderizacion del componente.
    console.log('constructor');
  }

  ngOnInit(): void { // primer ciclo de vida de angular(Son pasos o metodos que angular dispara de manera automatica). Normalmente el OnInit se utiliza para inicializar cosas
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');
  }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán America']
  heroeBorrado: string|undefined = '';

  borrarHeroe(){
    console.log('borrando...')
    //this.heroes.splice(index,1);
    this.heroeBorrado = this.heroes.shift() || ''; // con los palotes decimos: "Si esto es undefined entonces devolvemos cadena vacia"
    console.log(this.heroeBorrado);
  }

}
