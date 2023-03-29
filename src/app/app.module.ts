import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';



//Casi todo en angular son clases
@NgModule({
  declarations: [ // aqui colocamos componentes
    AppComponent
  ],
  imports: [ //aqui colocamos modulos
    BrowserModule,
    HeroesModule, //estamos agregando el HeroesModule para que podamos usar sus componentes.
    ContadorModule
  ],
  providers: [], //servicios especificos a un modulo
  bootstrap: [AppComponent] //modulo principal. el que se lanzara primero
})
export class AppModule { }
