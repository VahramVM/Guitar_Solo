import { Component } from '@angular/core';
import { Service } from '../service';


@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent {

  constructor(private service: Service) { }


  getTop(T: number) {
    return this.service.valuesT * T;
  }

  getBottom(B: number) {
    return this.service.valuesB * B;
  }

  getWidth(W: number) {
    return this.service.valuesW
  }

  getCallChange() {
    this.service.valuesT = 0;
    this.service.valuesB = 0;

    this.service.max = 0

    for (let i = 0; i < this.service.stringcheks.length; i++) {
      if (this.service.stringcheks[i].cord === true && this.service.stringcheks[i].num > this.service.max) {
        this.service.max = this.service.stringcheks[i].num
        console.log(this.service.max)
      }
    }
    
    this.service.min = 6
    for (let i = 0; i < this.service.stringcheks.length; i++) {
      if (this.service.stringcheks[i].cord === true && this.service.stringcheks[i].num < this.service.min) {
        this.service.min = this.service.stringcheks[i].num
        console.log(this.service.min)
      }
    }

    // Change top - bottom value

    
    this.service.valuesB = this.service.stringcheks.length - this.service.max;
    this.service.valuesT = this.service.min - 2;
    setTimeout(() => {
      this.service.valuesW = this.service.valuesW + 0.005
    }, 1);
    console.log(this.service.valuesT, this.service.valuesB)
  }

  arrowStart() {

    return {
      "arrowSinglNote": this.service.min === this.service.max,
      "arrowEmptyNote":
           this.service.stringcheks[0].cord === false
        && this.service.stringcheks[1].cord === false
        && this.service.stringcheks[2].cord === false
        && this.service.stringcheks[3].cord === false
        && this.service.stringcheks[4].cord === false
        && this.service.stringcheks[5].cord === false
    }
  }

  imgUpDown() {
    return {
      "imgUp": this.service.valuesUpDown === "0",
      "imgDown": this.service.valuesUpDown === "1",
    }
  }
}


