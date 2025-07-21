import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  name = signal('TEE');

  showMessage() {
    alert("Hello, Angular!" + this.name());
  }
 
}
