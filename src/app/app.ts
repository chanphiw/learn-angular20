import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Item } from './item/item';



@Component({
  selector: 'app-root',
  imports: [Header, Item],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  data = [

    {id:101, name: 'Kong', salary: 50000},
    {id:102, name: 'TEE', salary: 90000},
    {id:103, name: 'ICON', salary: 40000},
    {id:104, name: 'NEW', salary: 30000},
    {id:105, name: 'NEW2', salary: 99000},

  ]
  
}
