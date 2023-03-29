import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[ //indica que componentes tiene este modulo. Todo lo que declaremos en este modulo esta invisible para toda la aplicacion excepto para los componentes que estan definidos en este module
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//cosas que quiero que sean visibles fuera de este modulo. para que sean copnsumidas en otros componentes
        ListadoComponent
    ],
    imports:[ // van modulos
        CommonModule // ofrece directivas como el ngif o ngfor
    ]
})
export class HeroesModule{

}