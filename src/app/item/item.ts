import { Component } from '@angular/core';
import { input,output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {

  id = input.required<number>();
  name = input<string>();
  salary = input<number>();
  onDelete = output<number>();

  deleteItem(){
    if (confirm(`Are you sure you want to delete ${this.id()}?`)) {
      console.log(`Deleting item with ID: ${this.id()}`);
      // Emit the id to the parent component for deletion 
      this.onDelete.emit(this.id());
    }
  }
}

