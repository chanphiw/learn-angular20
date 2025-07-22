import { Component } from '@angular/core';


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
  { id: 5, name: 'Charlie', salary: 65000 },
  { id: 6, name: 'David', salary: 72000 },
  { id: 7, name: 'Eve', salary: 48000 },
]

clearData() {
  this.data = [];
}
addData() {
  this.data.push({ id: this.data.length + 1, name: `New User ${this.data.length + 1}`, salary: Math.floor(Math.random() * 100000) });
}
}
