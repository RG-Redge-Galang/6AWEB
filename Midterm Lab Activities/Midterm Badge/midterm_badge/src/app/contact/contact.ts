import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  template: `
    <h1>Contact Us</h1>

    <input [(ngModel)]="name" placeholder="Name" />
    <input [(ngModel)]="email" placeholder="Email" />
    <textarea [(ngModel)]="message"></textarea>

    <button type="button">Submit</button>

    <h3>Form Preview</h3>
    <p>Name: {{ name | uppercase }}</p>
    <p>Email: {{ email }}</p>
    <p>{{ message }}</p>
  `
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
}
