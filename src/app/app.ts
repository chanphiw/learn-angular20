import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Item } from './item/item';


interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  imports: [Header, Item],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  data: Employee[] = [

    {id:101, name: 'Kong', salary: 50000},
    {id:102, name: 'TEE', salary: 90000},
    {id:103, name: 'ICON', salary: 40000},
    {id:104, name: 'NEW', salary: 30000},
    {id:105, name: 'หนุ่ม', salary: 60000},
    {id:106, name: 'สมชาย', salary: 70000},

  ]

  removeDataById(id: number) {
    this.data = this.data.filter((emp) => emp.id !== id);
     

  }
  
}
