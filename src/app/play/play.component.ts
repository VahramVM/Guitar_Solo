import { Component, OnInit } from '@angular/core';
import { Service } from '../service';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],

})
export class PlayComponent implements OnInit {
  constructor(private service: Service) { }

  ngOnInit() {
    
  }

  interval:any;
  
  
  Play() {

    this.service.frameValue = 0
    console.log(this.service.frameValue);


    for (let j = 0; j < this.service.stringcheks.length; j++) {
      this.service.stringcheks[j].cord = false
    }

    for (let j = 0; j < this.service.necks.length; j++) {
      this.service.necks[j].note = 0;
    }
    
    this.interval = setInterval(() => {


      if (this.service.Frames.length > 0) {
        this.service.frameValue = this.service.frameValue + 1;
      }

      if (this.service.frameValue  > 0) {
        this.service.disabled = false
      }

      for (let i = 0; i < this.service.Frames.length; i++) {
        if (this.service.frameValue === i) {

          for (let j = 0; j < this.service.necks.length; j++) {
            this.service.necks[j].note = this.service.Frames[i].right[j];
          }
        }
      }

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

            this.service.stringcheks[this.service.min - 1].cord = true
            this.service.stringcheks[this.service.max - 1].cord = true
          }

          setTimeout(() => { // for arrow error in css
            this.service.valuesW = this.service.valuesW + 0.0001
          }, 0.0001);
          this.service.valuesB = this.service.stringcheks.length - this.service.max
          this.service.valuesT = this.service.min - 2

        }
      }

      for (let i = 0; i < this.service.Frames.length; i++) {

        if (this.service.frameValue === i) {
          this.service.valuesUpDown = this.service.Frames[i].left[2]
        }
      }

      for (let i = 0; i < this.service.Frames.length; i++) {
        if (this.service.frameValue === i) {
          this.service.intervalFrame = this.service.Frames[this.service.Frames.length-1].interval
        }
        console.log(this.service.Frames[this.service.Frames.length-1].interval);
        
      }
      
       if (this.service.frameValue >= this.service.Frames.length-1) {
        clearInterval(this.interval);
      }
      

    }, this.service.intervalFrame );
console.log(this.service.intervalFrame);

  }

  Stop() {
    clearInterval(this.interval);
  }

}


