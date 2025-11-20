import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-data-binding-demo',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  message = "Data Binding Demonstration";
  title = "My First App!"
  description = "This is my new Angular Application!"
  imageUrl = '../angular.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';
  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--
  }
}
