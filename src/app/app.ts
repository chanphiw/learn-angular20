import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Item } from './item/item';
import { Addform } from './addform/addform';


export interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  imports: [Header, Item, Addform],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  data: Employee[] = [

    {id:101, name: 'Kong', salary: 50000},
    {id:102, name: 'TEE', salary: 90000},
    

  ]

  removeDataById(id: number) {
    this.data = this.data.filter((emp) => emp.id !== id);
     

  }

  // รับข้อมูลจาก Addform จากลูก component
  // และเพิ่มเข้าไปในต่อท้าย data array
  // โดยใช้ push() method
  insertData(emp: Employee) {
    this.data.unshift(emp);
    console.log('New Employee Added:', emp);
  }
  
}
