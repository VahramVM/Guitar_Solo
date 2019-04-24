import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service';


@Component({
  selector: 'app-freme',
  templateUrl: './freme.component.html',
  styleUrls: ['./freme.component.css']
})
export class FremeComponent implements OnInit {

  constructor(private service: Service) { }

  ngOnInit() {
  }



  neckFrame() {

    for (let i = 0; i < this.service.Frames.length; i++) {
      if (this.service.frameValue === i) {
        for (let j = 0; j < this.service.necks.length; j++) {
          this.service.necks[j].note = this.service.Frames[i].right[j];
        }
      }
    }
  }

  stringFrame() {

    for (let i = 0; i < this.service.Frames.length; i++) {
      if (this.service.frameValue === i) {
        if (this.service.min === 6 && this.service.max === 0) {
          for (let j = 0; j < this.service.stringcheks.length; j++) {
            this.service.stringcheks[j].cord = false
          }
        }

        this.service.min = this.service.Frames[i].left[0];
        this.service.max = this.service.Frames[i].left[1];

        if (this.service.min === this.service.max) {
          for (let j = 0; j < this.service.stringcheks.length; j++) {
            this.service.stringcheks[j].cord = false
          }
        }

        if (this.service.min !== 0) {
          this.service.stringcheks[this.service.min - 1].cord = true
        } else {
          this.service.min = 0
        }

        if (this.service.min !== this.service.max) {
          for (let j = 0; j < this.service.stringcheks.length; j++) {
            this.service.stringcheks[j].cord = false
          }
        }

        if (this.service.min !== 6 && this.service.max !== 0 || this.service.min !== 0 && this.service.max !== 0) {
          console.log(this.service.min, this.service.max);

          this.service.stringcheks[this.service.min - 1].cord = true
          this.service.stringcheks[this.service.max - 1].cord = true
        }

        this.service.valuesB = this.service.stringcheks.length - this.service.max;
        this.service.valuesT = this.service.min - 2;
        setTimeout(() => {
          this.service.valuesW = this.service.valuesW + 0.0001
        }, 0.001);

      }
    }

  }

  changeUpDown() {
    for (let i = 0; i < this.service.Frames.length; i++) {
      if (this.service.frameValue === i) {
        this.service.valuesUpDown = this.service.Frames[i].left[2]
      }
    }
  }

  changeInterval() {
    for (let i = 0; i < this.service.Frames.length; i++) {
      if (this.service.frameValue === i) {
        this.service.intervalFrame = this.service.Frames[i].interval
      }
    }
  }

  pushFrame() {

    if (this.service.frameValue >= this.service.Frames.length) {
      this.service.Frames.push({
        interval: this.service.intervalFrame,
        left: [this.service.min, this.service.max, this.service.valuesUpDown],
        right: [
          this.service.necks[0].note,
          this.service.necks[1].note,
          this.service.necks[2].note,
          this.service.necks[3].note,
          this.service.necks[4].note,
          this.service.necks[5].note]
      })
    }
  }

  abdateInfo() {

    for (let j = 0; j < this.service.necks.length; j++) {
      if (this.service.frameValue < this.service.Frames.length) {
        this.service.Frames[this.service.frameValue].right[j] = this.service.necks[j].note
      }
    }

    if (this.service.frameValue < this.service.Frames.length) {
      if (this.service.min !== 6 && this.service.max !== 0 || this.service.min !== this.service.max === false) {
        this.service.Frames[this.service.frameValue].left[0] = this.service.min
        this.service.Frames[this.service.frameValue].left[1] = this.service.max
        console.log(this.service.min, this.service.max);

      } else {
        this.service.max = 0
        this.service.min = 0
        this.service.Frames[this.service.frameValue].left[0] = this.service.min
        this.service.Frames[this.service.frameValue].left[1] = this.service.max
      }
    }

    if (this.service.frameValue < this.service.Frames.length) {
      this.service.Frames[this.service.frameValue].left[2] = this.service.valuesUpDown
    }

    if (this.service.frameValue < this.service.Frames.length) {
      this.service.Frames[this.service.frameValue].interval = this.service.intervalFrame
    }
  }

}





