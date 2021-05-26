import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  //Con private decimos que HeroesService solo lo vamos a poder usar aqui y la nomenclatura es _ y minuscula despues el tipo pero no es necesario por eso a router no le pusimos eso
  constructor( private _heroesService:HeroesService,private router:Router ) {   
  }
  ngOnInit() {
    //ngOnInit se ejecuta despues del constructor ya que la pagina este cargada
    //Ejecutamos el metodo getHeroes
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  //verHeroe es un metodo que sirve para movernos entre rutas
  verHeroe( idx:number){
    //console.log(idx);
    this.router.navigate( ['/heroe',idx] );
  }
}
