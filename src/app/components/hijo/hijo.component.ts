import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit  {
  @Input() nombreHijo: string = 'Sin Nombre';
  @Output() cambioNombreHijo= new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}

  cambiarNombre(){
    this.nombreHijo = 'Juan Karlost';
    this.cambioNombreHijo.emit(this.nombreHijo);
  }
}
