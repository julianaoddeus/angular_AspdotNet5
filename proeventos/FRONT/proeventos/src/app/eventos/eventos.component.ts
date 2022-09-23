import { ServiceEventos } from './service-eventos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

 public eventos!: any[];


  constructor(private service: ServiceEventos) { }


  ngOnInit() {
    this.service.getEventos().subscribe(resp => this.eventos = resp)
  }

}
