import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template-demo',
  imports: [FormsModule],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';
  username ='';
  email ='';
  password = '';
  role = '';
  gender ='';
  status = '';
  comments = '';
  age = '';
  address='';
  department='';
  submitted = false;

onSubmit(){
  this.submitted = true;
}
}
