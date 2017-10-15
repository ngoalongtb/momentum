import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeModule = "japan";

  changeActiveModule(){
    this.activeModule = "";
    console.log("it oki");
  }
}
