import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  @Input() heroe:any = {}
  @Input() index: number;
  heroes:Heroe[] = [];
  vacio:boolean = false;
  constructor(private activatedRoute:ActivatedRoute,private heroeService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(`params:${params['texto']}`)
      this.heroes = this.heroeService.buscarHeroe(params['texto']);
      console.log(this.heroes);
      if(this.heroes.length==0)
        this.vacio = true
      else
        this.vacio= false
    })
  }
  ngOnInit(): void {
  
  }
}
