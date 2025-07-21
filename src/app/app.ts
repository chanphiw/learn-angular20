import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
data = [
  { id: 1, name: 'John', salary: 50000 },
  { id: 2, name: 'Jane', salary: 60000 },
  { id: 3, name: 'Bob', salary: 55000 },
  { id: 4, name: 'Alice', salary: 70000 },
  { id: 5, name: 'Charlie', salary: 65000 }
]

}
