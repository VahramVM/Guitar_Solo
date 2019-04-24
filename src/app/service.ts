import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Service implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  necks = [
    { note: 0 },
    { note: 0 },
    { note: 0 },
    { note: 0 },
    { note: 0 },
    { note: 0 }
  ];

  stringcheks = [
    { cord: false, num: 1 },
    { cord: false, num: 2 },
    { cord: false, num: 3 },
    { cord: false, num: 4 },
    { cord: false, num: 5 },
    { cord: false, num: 6 },
  ]

  Frames = [];

  min: number = 0;
  max: number = 0;

  valuesB: number = 0;
  valuesT: number = 0;
  valuesW: number = 50;

  valuesUpDown: string = "1";

  frameValue: number;
  intervalFrame: number = 1000;

  disabled: boolean = false;

  changeDisabled() {

    if (this.frameValue < 1 || this.frameValue === null) {
      this.disabled = true
    }
    else {
      this.disabled = false
    }
  }

}




