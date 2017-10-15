import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = "\“If you fear failure, you will never go anywhere.\”";
  constructor() { }

  ngOnInit() {
  }

}
