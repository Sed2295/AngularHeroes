import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  //@Input Sirve para que podamos mandar argumentos desde el padre es lo que colocamos en el archivo heroes.component.html
  @Input() heroe:any = {}
  @Input() index: number;
  //Es el proceso inverso de input de hijo a padre y va a emitir un number por eso el <number>
  @Output() heroeSeleccionado:EventEmitter<number>
  constructor(private router:Router){
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }
  verHeroe(){
    console.log(this.index)
    this.router.navigate( ['/heroe',this.index] );
    //Forma 1 haciendo uso del eventemitter
    //this.heroeSeleccionado.emit(this.index)
  }

}
