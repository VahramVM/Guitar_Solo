import { Component, Inject, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-neck',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.css']
})
export class NeckComponent implements OnInit {

  constructor(private service: Service ) { }

  ngOnInit () {  
  }
 
  css: string[] = [
    "note0", 
    "note1", 
    "note2", 
    "note3", 
    "note4", 
    "note5", 
    "note6", 
    "note7", 
    "note8", 
    "note9", 
    "note10", 
    "note11", 
    "note12"
  ]
 
  getClass(a:number) {

    for (let i = 0; i < this.css.length; i++) {
      if (this.service.necks[a].note === i || this.service.necks[a].note === null) {
        return this.css[i]
      }
    }
  }
}


