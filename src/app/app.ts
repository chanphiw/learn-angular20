import { Component } from '@angular/core';
import { NgClass, NgStyle, UpperCasePipe, CurrencyPipe, DatePipe  } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [NgClass, NgStyle, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data = [
    { id: 1, name: 'John', salary: 50000, active: "06/21/2025" },
    { id: 2, name: 'Jane', salary: 60000, active: "06/18/2025" },
    { id: 3, name: 'Bob', salary: 55000, active: "06/01/2025" },
    { id: 4, name: 'Alice', salary: 70000, active: "06/12/2025" },
    { id: 5, name: 'Charlie', salary: 65000, active: "06/15/2025" },
    { id: 6, name: 'David', salary: 72000, active: "06/29/2025" },
    { id: 7, name: 'Eve', salary: 48000, active: "06/22/2025" },
  ];

  clearData() {
    this.data = [];
  }
  addData() {
    this.data.push({
      id: this.data.length + 1,
      name: `New User ${this.data.length + 1}`,
      salary: Math.floor(Math.random() * 100000),
      active: new Date().toLocaleDateString()
    });
  }

  isActive = false;

  changeMode() {
    this.isActive = !this.isActive;
    document.body.classList.toggle('dark', this.isActive);
    document.body.classList.toggle('light', !this.isActive);
  }

  color = 'purple';
  size = 30;
  myStyle={
    'background': 'purple',
    'color': 'white'
  }

  // pipe



}
