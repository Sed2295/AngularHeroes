import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heoroe',
  templateUrl: './heoroe.component.html'
})
//Aqui borramos onInit para ver como se hace de otra forma
export class HeoroeComponent{
  heroe:any = {};
  img:string = '';
  constructor( private activatedRoute:ActivatedRoute, private _heroeService:HeroesService) {
    //Obtenemos los parametros de la url
    this.activatedRoute.params.subscribe( params => {
      //Nota es id por que es como lo nombramos en el archivo app.routes.ts
      //Forma 1 
      console.log(params['id']);
      //Forma 2
      //console.log(params.id);
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
      if(this.heroe.casa == 'DC')
        this.img = 'assets/recursos/wolverine.png';
      else
        this.img = 'assets/recursos/A-64.png';
    })
  }

}
