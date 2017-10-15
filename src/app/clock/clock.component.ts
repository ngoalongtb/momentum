import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time="";
  constructor() { 
    var currentdate = new Date();
      this.time = currentdate.getHours() + ":"  
                + currentdate.getMinutes();
  }

  changeTime(){
    var that = this;
    setInterval(function(){
      var currentdate = new Date();
      var time = currentdate.getHours() + ":"  
                + currentdate.getMinutes();
      that.time = time;
    },3000);
  }

  ngOnInit() {
    this.changeTime();
  }

}
