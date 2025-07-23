import { Component, signal,input, output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../app';

@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css'
})
export class Addform {
  fullname = signal('');
  salary = signal(15000);
  onSave = output<Employee>();

  addNewEmployee() {

    let emp: Employee = {
      id: Math.floor(Math.random() * 1000) + 1 ,// Generate a
      name: this.fullname(),
      salary: this.salary(),
    }
    // console.log(emp)

    // ส่งกลับไปยัง parent component
    this.onSave.emit(emp);
    // Reset the form fields
    this.fullname.set('');
    this.salary.set(15000);
  }
}
