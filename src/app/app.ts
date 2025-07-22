import { Component } from '@angular/core';
import { signal } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  fname = signal<string>('Pathompong');
  lname = signal<string>('Chanphiw');
  exp = signal<number>(15);
  skills = signal<string[]>(['Angular', 'React', 'Vue']);


change(){
  this.fname.set('John');
  this.lname.set('Doe');
  this.exp.set(10);
  this.skills.set(['JavaScript', 'TypeScript', 'Python']);

}

increment(){
  // add max value = 35years
  const value = this.exp();
  if (value >= 35) {
    console.warn('Maximum experience limit reached');
    return;
  }
  this.exp.update(value => value + 1);

  // when max value alerts, you are retired
  if (value + 1 === 35) {
    alert('You are retired now');
  }

}

decrement(){
  // add min value = 0
  if (this.exp() > 0) {
    this.exp.update(value => value - 1);
  }
}
}
