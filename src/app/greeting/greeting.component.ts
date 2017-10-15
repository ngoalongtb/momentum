import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  name = "luantm";
  greeting = "Good morning"
  constructor() { }

  ngOnInit() {

  }

  changeGreeting(){
    var that = this;
    setInterval(function(){
      var currentDate = new Date();
      var hours = currentDate.getHours();
      if(hours < 12){
        that.greeting = "Good morning";
      } else if(hours < 18){
        that.greeting = "Good afternoon";
      } else {
        that.greeting = "Good evening";
      }
    }, 60000);
  }


}
