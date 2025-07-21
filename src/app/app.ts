import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imageUrl = "https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_1280.jpg"
  size = signal(200);

  doubleSize() {
    return this.size() * 2;
  }
 
}
