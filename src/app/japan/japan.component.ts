import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {japan} from './japan';
@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.css']
})
export class JapanComponent implements OnInit {
  @Input() activeModule: string;
  @Output() output = new EventEmitter();

  japan = japan;
  random = 1;
  romaji = "";
  show = "";
  turnHiragana = true;
  turnKatakana = false;
  constructor() {
    this.next();
  }
  help = "";

  next(){
    this.help = "";
    this.romaji = "";
    this.random = Math.floor((Math.random() * japan.length) + 1);

    if(this.turnHiragana && !this.turnKatakana){
      this.show = japan[this.random].hiragana;
    }else if(!this.turnHiragana && this.turnKatakana){
      this.show = japan[this.random].katakana;
    }
    else{
        if(Math.random() >=0.5){
          this.show = japan[this.random].hiragana;
        }else{
          this.show = japan[this.random].katakana;
        }
    }
    console.log(japan[this.random].romaji);
    console.log("hiragana", this.turnHiragana);
    console.log("katakana", this.turnKatakana);
  }

  ngOnInit() {
    console.log(this.activeModule);
  }
  close(){
    this.output.emit(""); 
  }
  turnHelp(){
    this.help = this.japan[this.random].romaji;
  }
  onKey(event){
    console.log("romanji", this.turnHiragana);
    let value = event.target.value;
    console.log("value", this.romaji);
    if(this.romaji == "help"){
        this.turnHelp();
    }else if(this.romaji == "next"){
        this.next();
        
    }
    if(value == japan[this.random].romaji){
      this.next();
    }
  }
}
